import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setFeedback('');

    if (!currentPassword) {
      setError('Vul eerst je huidige wachtwoord in.');
      return;
    }

    if (password.length < 6) {
      setError('Wachtwoord moet minstens 6 tekens lang zijn.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Wachtwoorden komen niet overeen.');
      return;
    }

    setSaving(true);
    const { error: verifyError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });

    if (verifyError) {
      setSaving(false);
      setError('Huidig wachtwoord klopt niet.');
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({ password });
    setSaving(false);

    if (updateError) {
      setError(updateError.message || 'Wachtwoord kon niet worden bijgewerkt.');
      return;
    }

    setFeedback('Wachtwoord succesvol bijgewerkt. Je wordt over 5 seconden teruggestuurd.');
    setCurrentPassword('');
    setPassword('');
    setConfirmPassword('');

    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-gray-50 border border-gray-200 rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-3">Mijn profiel</h1>
        <p className="text-gray-600 mb-6">Hier kun je je accountgegevens bekijken en je wachtwoord wijzigen.</p>

        <div className="mb-8 rounded-2xl bg-white border border-gray-200 p-5">
          <p className="text-sm text-gray-500">E-mailadres</p>
          <p className="text-base font-semibold text-gray-900">{user.email}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="currentPassword">
              Huidig wachtwoord
            </label>
            <input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
              required
              placeholder="Vul hier je huidige wachtwoord in"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
              Nieuw wachtwoord
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="Minstens 6 tekens"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="confirmPassword">
              Herhaal nieuw wachtwoord
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              placeholder="Herhaal wachtwoord"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {feedback && <p className="text-sm text-green-600">{feedback}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-xl font-semibold transition-colors duration-200"
          >
            {saving ? 'Opslaan…' : 'Wachtwoord wijzigen'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link to="/" className="text-primary hover:text-primary/80 font-semibold">
            Terug naar home
          </Link>
        </div>
      </div>
    </main>
  );
}
