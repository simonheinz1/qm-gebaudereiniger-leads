import React from 'react';

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto prose lg:prose-xl">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Heinz Consulting<br />
        Inh. Helmut Heinz {/* Annahme: Einzelunternehmen, ggf. anpassen */}<br />
        Knollstraße 17<br />
        72072 Tübingen<br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 0173 395 8762 {/* Bessere Lesbarkeit mit Leerzeichen */}<br />
        E-Mail: info@heinz-consulting.de
      </p>

      {/* 
        Weitere notwendige Angaben je nach Rechtsform und Tätigkeit können sein:
        - Vertreten durch (bei juristischen Personen)
        - Registereintrag (Handelsregister, Vereinsregister etc.)
        - Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz
        - Wirtschafts-Identifikationsnummer gemäß § 139c Abgabenordnung (falls vorhanden)
        - Berufsbezeichnung und zuständige Kammer (falls zutreffend)
        - Berufsrechtliche Regelungen (falls zutreffend)
        - Angaben zur Berufshaftpflichtversicherung (falls vorhanden/notwendig)
        - Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        - EU-Streitschlichtung / Verbraucherstreitbeilegung
       */}

      <p className="mt-8 p-4 border border-red-300 bg-red-50 text-red-700 rounded">
        <strong>Wichtiger Hinweis:</strong> Die hier gemachten Angaben basieren auf den bereitgestellten Informationen.
        Bitte überprüfen Sie die Vollständigkeit und Richtigkeit und ergänzen Sie alle
        für Sie notwendigen rechtlichen Informationen. Konsultieren Sie im Zweifel
        einen Anwalt oder nutzen Sie einen professionellen Impressumsgenerator.
      </p>
    </div>
  );
} 