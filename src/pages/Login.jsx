import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const { signIn, user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [loading, user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    const { error } = await signIn(email, password);

    setSubmitting(false);

    if (error) {
      setError(error.message || 'Login is mislukt. Controleer je gegevens.');
      return;
    }

    navigate('/');
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setResetError('');
    setResetMessage('');
    setResetLoading(true);

    if (!resetEmail) {
      setResetError('Vul je e-mailadres in om je wachtwoord te resetten.');
      setResetLoading(false);
      return;
    }

    const redirectTo = `${window.location.origin}/reset-password`;
    const { data, error } = await supabase.auth.resetPasswordForEmail(resetEmail, { redirectTo });

    setResetLoading(false);

    if (error) {
      setResetError(error.message || 'Er is iets misgegaan bij het versturen van de resetmail.');
      return;
    }

    setResetMessage('Er is een resetlink naar je mail gestuurd. Controleer je inbox.');
    setResetEmail('');
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-gray-50 border border-gray-200 rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-3">Klant login</h1>
        <p className="text-gray-600 mb-8">
          Deze pagina is alleen voor handmatig aangemaakte klanten. Er is geen openbare registratie.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              E-mailadres
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
              Wachtwoord
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-xl font-semibold transition-colors duration-200"
          >
            {loading ? 'Inloggen…' : 'Inloggen'}
          </button>
        </form>

        <div className="mt-4 text-center">
          {!showForgot ? (
            <button
              type="button"
              onClick={() => {
                setShowForgot(true);
                setError('');
                setResetMessage('');
                setResetError('');
              }}
              className="text-sm text-primary font-semibold hover:text-primary/80"
            >
              Wachtwoord vergeten?
            </button>
          ) : (
            <form onSubmit={handleResetPassword} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="resetEmail">
                  Vul je e-mailadres in
                </label>
                <input
                  id="resetEmail"
                  type="email"
                  value={resetEmail}
                  onChange={(event) => setResetEmail(event.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
              {resetError && <p className="text-sm text-red-600">{resetError}</p>}
              {resetMessage && <p className="text-sm text-green-600">{resetMessage}</p>}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="submit"
                  disabled={resetLoading}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-200"
                >
                  {resetLoading ? 'Versturen…' : 'Reset mail versturen'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForgot(false);
                    setResetEmail('');
                    setResetMessage('');
                    setResetError('');
                  }}
                  className="w-full sm:w-auto text-gray-700 hover:text-gray-900 py-3 px-6 rounded-xl border border-gray-300 transition-colors duration-200"
                >
                  Annuleren
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
