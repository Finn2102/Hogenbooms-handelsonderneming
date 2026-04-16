import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const token = searchParams.get('token') || searchParams.get('access_token');
  const type = searchParams.get('type');

  useEffect(() => {
    if (!token || type !== 'recovery') {
      setError('Ongeldige resetlink. Controleer je e-mail of vraag een nieuwe link aan.');
    }
  }, [token, type]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!token) {
      setError('Ongeldige resetlink.');
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

    setLoading(true);

    const { data, error: verifyError } = await supabase.auth.verifyOtp({
      token,
      type: 'recovery',
    });

    if (verifyError) {
      setError(verifyError.message || 'Resetlink is ongeldig of verlopen.');
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (updateError) {
      setError(updateError.message || 'Wachtwoord kon niet worden bijgewerkt.');
      return;
    }

    setSuccess('Wachtwoord is aangepast. Je kunt nu inloggen met je nieuwe wachtwoord.');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-gray-50 border border-gray-200 rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-3">Wachtwoord opnieuw instellen</h1>
        <p className="text-gray-600 mb-8">
          Gebruik het formulier om een nieuw wachtwoord in te stellen voor je account.
        </p>

        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
        {success && <p className="text-sm text-green-600 mb-4">{success}</p>}

        {!success && !error && !token ? (
          <p className="text-sm text-gray-600">
            Het lijkt erop dat deze resetpagina niet correct is geopend. Controleer je link of vraag een nieuwe resetmail aan.
          </p>
        ) : (
          !success && (
            <form onSubmit={handleSubmit} className="space-y-6">
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
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                {loading ? 'Opslaan…' : 'Wachtwoord wijzigen'}
              </button>
            </form>
          )
        )}

        <div className="mt-6 text-center">
          <Link to="/login" className="text-primary font-semibold hover:text-primary/80">
            Terug naar inloggen
          </Link>
        </div>
      </div>
    </main>
  );
}
