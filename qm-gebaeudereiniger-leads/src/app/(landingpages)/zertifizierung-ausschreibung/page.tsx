import React from 'react';
import Link from 'next/link'; // Importiere Link für den Button
import type { Metadata } from 'next';

// SEO Metadaten für die Seite
export const metadata: Metadata = {
  title: 'Zertifizierung Gebäudereinigung für Ausschreibungen | Qualitätsnachweis',
  description: 'Erfüllen Sie Ausschreibungs-Anforderungen mit unserem praxisnahen Qualitäts- & Umweltnachweis für Gebäudereiniger. Kosteneffiziente Alternative zur ISO. Mehr Aufträge gewinnen!',
  // Weitere Metadaten wie keywords (obwohl weniger wichtig für Google heute), canonical URL etc. könnten hier hinzugefügt werden.
};

export default function ZertifizierungAusschreibungPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">
        Zertifizierung & Qualitätsnachweis Gebäudereinigung: Mehr Aufträge bei Ausschreibungen gewinnen
      </h1>
      <p className="text-lg">
        Als Gebäudereiniger verlieren Sie wertvolle Aufträge von Städten, Kliniken oder großen Unternehmen, weil für die Ausschreibung ein anerkannter Qualitäts- oder Umweltnachweis fehlt? Gerade bei öffentlichen Ausschreibungen sind Zertifikate oft eine entscheidende Hürde.
      </p>

      <div className="p-4 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Die Lösung: Unser praxisnaher Qualitäts- & Umweltstandard für Gebäudereiniger</h2>
        <p className="mb-2">
          Wir bieten Ihnen eine <strong>schnelle, unkomplizierte und kosteneffiziente Alternative</strong> zur oft langwierigen und teuren DIN ISO 9001/14001 Zertifizierung. Unser Standard konzentriert sich auf die wirklich relevanten Qualitäts- und Umweltaspekte Ihrer Arbeit als Gebäudereiniger – ohne unnötigen bürokratischen Aufwand.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Ihre Vorteile für Ausschreibungen:</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Erfüllen Sie die Kernanforderungen vieler Ausschreibungen im Bereich Gebäudereinigung.</li>
          <li>Zeigen Sie Professionalität und Engagement für Qualität & Umwelt.</li>
          <li>Profitieren Sie von einem schlanken Prozess mit Fokus auf Ihren Nutzen.</li>
          <li>Verbessern Sie Ihre Chancen auf attraktive Aufträge signifikant.</li>
        </ul>
        <p>
          Unser Zertifikat ist Ihr glaubwürdiger Beleg für ein funktionierendes Managementsystem. Viele Auftraggeber erkennen dies an, da wir den Fokus auf die praktische Umsetzung legen, die im Alltag zählt – oft mehr als reine Theorie.
        </p>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Sind Sie bereit, bei der nächsten Ausschreibung zu punkten?</h2>
        <p className="mb-4">Sichern Sie sich den entscheidenden Vorteil bei der nächsten Vergabe. Kontaktieren Sie uns jetzt für eine unverbindliche Erstberatung.</p>
        <Link href="/kontakt" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Jetzt kostenlos beraten lassen
        </Link>
      </div>
    </div>
  );
} 