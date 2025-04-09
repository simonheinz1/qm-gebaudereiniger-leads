'use client'; // Diese Zeile ist wichtig für Client-seitige Interaktivität wie State Handling

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link für den Datenschutz-Link
import type { Metadata } from 'next';

// SEO Metadaten für die Kontaktseite
export const metadata: Metadata = {
  title: 'Kontakt | Qualitätsnachweis Gebäudereiniger | Erstgespräch',
  description: 'Kontaktieren Sie uns für Fragen zu QM/UM-Nachweisen für Gebäudereiniger oder vereinbaren Sie ein kostenloses Erstgespräch. Wir freuen uns auf Ihre Anfrage!',
};

export default function KontaktPage() {
  // Einfaches State Handling für Formulardaten (optional für dieses Stadium)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  // Zusätzliche States für Feedback
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  // Neuer State für die Datenschutz-Checkbox
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Status zurücksetzen bei Änderung
    setFormStatus(null);
  };

  // Handler für die Checkbox-Änderung
  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyAccepted(e.target.checked);
    setFormStatus(null); // Status zurücksetzen, falls Nutzer Zustimmung ändert
  };

  // Angepasste handleSubmit Funktion
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Zusätzliche Prüfung (obwohl 'required' dies meist abfängt)
    if (!privacyAccepted) {
      setFormStatus({ type: 'error', message: 'Bitte akzeptieren Sie die Datenschutzerklärung.' });
      return;
    }

    setIsLoading(true);
    setFormStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.' });
        // Formular leeren nach Erfolg
        setFormData({ name: '', email: '', company: '', message: '' });
        setPrivacyAccepted(false); // Checkbox nach Erfolg zurücksetzen
      } else {
        // Fehler vom Server anzeigen
        setFormStatus({ type: 'error', message: result.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' });
      }
    } catch (error) {
      console.error('Fehler beim Senden des Formulars:', error);
      setFormStatus({ type: 'error', message: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Kontaktieren Sie uns</h1>
      <p className="mb-8 text-gray-600">
        Haben Sie Fragen zu unseren praxisnahen Zertifizierungen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren? Nutzen Sie gerne das Kontaktformular oder rufen Sie uns an.
      </p>

      {/* Kontaktinformationen hinzugefügt */}
      <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Direkter Kontakt</h2>
        <p className="text-gray-600"><strong className="font-medium">Telefon:</strong> 0173 395 8762</p>
        <p className="text-gray-600"><strong className="font-medium">E-Mail:</strong> <a href="mailto:info@heinz-consulting.de" className="text-blue-600 hover:underline">info@heinz-consulting.de</a></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ihr Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading} // Deaktivieren während des Ladens
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Ihre E-Mail-Adresse <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Firma (Optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Ihre Nachricht <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
          ></textarea>
        </div>

        {/* Datenschutz Checkbox */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              checked={privacyAccepted}
              onChange={handlePrivacyChange}
              disabled={isLoading}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded disabled:opacity-50"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacy" className="font-medium text-gray-700">
              Ich habe die <Link href="/datenschutz" target="_blank" className="text-blue-600 hover:underline">Datenschutzerklärung</Link> gelesen und akzeptiere sie. <span className="text-red-500">*</span>
            </label>
          </div>
        </div>

        {/* Statusmeldungen anzeigen */}
        {formStatus && (
          <div className={`p-3 rounded-md text-sm ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {formStatus.message}
          </div>
        )}

        <div>
          <button
            type="submit"
            // Button deaktivieren, wenn geladen wird ODER Datenschutz nicht akzeptiert wurde
            disabled={isLoading || !privacyAccepted}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sende...' : 'Anfrage senden'}
          </button>
        </div>
      </form>
      <p className="mt-4 text-xs text-gray-500"><span className="text-red-500">*</span> Pflichtfelder</p>
    </div>
  );
} 