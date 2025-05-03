'use client'; // Diese Zeile ist wichtig für Client-seitige Interaktivität wie State Handling

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link für den Datenschutz-Link
// import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; // Icons entfernt
// import type { Metadata } from 'next'; // Metadata-Import nicht mehr nötig

// SEO Metadaten entfernt, da dies eine Client Component ist
/*
export const metadata: Metadata = {
  title: 'Kontakt | Qualitätsnachweis Gebäudereiniger | Erstgespräch',
  description: 'Kontaktieren Sie uns für Fragen zu QM/UM-Nachweisen für Gebäudereiniger oder vereinbaren Sie ein kostenloses Erstgespräch. Wir freuen uns auf Ihre Anfrage!',
};
*/

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
    <div className="bg-gray-50 min-h-screen">
       {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kontakt & Kostenloses Erstgespräch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Fragen zum QM/UM-Nachweis oder direkt loslegen? Vereinbaren Sie jetzt Ihr unverbindliches Erstgespräch.
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

           {/* Linke Spalte: Intro & Direkte Kontaktdaten */}
          <div className="md:col-span-1 space-y-8">
             <div>
               <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ihr Anliegen</h2>
               <p className="text-gray-600 leading-relaxed">
                 Wir analysieren Ihre Situation (ca. 15-20 Min.) und zeigen Ihnen, wie Sie mit einem praxisnahen Qualitäts- und Umweltnachweis profitieren können.
              </p>
             </div>
             <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold text-teal-700 mb-4">Direkter Kontakt</h2>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    {/* <PhoneIcon className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0"/> Icon entfernt */}
                    <strong className="font-medium w-16">Telefon:</strong>
                    <span>0173 395 8762</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                     {/* <EnvelopeIcon className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0"/> Icon entfernt */}
                     <strong className="font-medium w-16">E-Mail:</strong>
                    <a href="mailto:simon.heinz@norm-cert.de" className="text-teal-600 hover:underline break-all">
                      simon.heinz@norm-cert.de
                    </a>
                  </p>
                 </div>
             </div>
          </div>

          {/* Rechte Spalte: Formular */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Anfrage per Formular:</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
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
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100"
                />
              </div>
               {/* Email Input */}
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100"
                />
              </div>
               {/* Company Input */}
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100"
                />
              </div>
               {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Ihre Nachricht (z.B. Wunschtermin) <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100"
                ></textarea>
              </div>

              {/* Privacy Checkbox */}
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
                    className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded disabled:opacity-50"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="font-medium text-gray-700">
                    Ich habe die <Link href="/datenschutz" target="_blank" className="text-teal-600 hover:underline">Datenschutzerklärung</Link> gelesen und akzeptiere sie. <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              {/* Status Messages */}
              {formStatus && (
                <div className={`p-3 rounded-md text-sm ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading || !privacyAccepted}
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sende...' : 'Kostenloses Erstgespräch anfragen'}
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500 text-right"><span className="text-red-500">*</span> Pflichtfelder</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 