import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadaten für die Seite
export const metadata: Metadata = {
  title: 'Praxisnaher Qualitätsnachweis Gebäudereinigung | Effizienz steigern & Kunden überzeugen',
  description: 'Verbessern Sie Abläufe und überzeugen Sie Kunden mit unserem Qualitäts- & Umweltnachweis für Gebäudereiniger. Praxisnah, effizient, ohne ISO-Bürokratie.',
  // Weitere Metadaten könnten hier hinzugefügt werden.
};

export default function QualitaetsnachweisPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
        Mehr als nur ein Zertifikat: Ihr praxisnaher Qualitätsnachweis für die Gebäudereinigung
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Wollen Sie Ihre Betriebsabläufe spürbar verbessern, die Zufriedenheit Ihrer Kunden steigern und Ihr Team motivieren? Unser Qualitäts- und Umweltnachweis (QM/UM) hilft Ihnen dabei – effizient, verständlich und speziell für Gebäudereiniger entwickelt von einem erfahrenen Auditor.
      </p>

      <section className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Der Nutzen im Fokus – Nicht die Bürokratie</h2>
        <p className="text-lg text-gray-700 mb-4">
          Viele denken bei QM/UM an komplizierte ISO-Normen und Papierkram. Mein Ansatz, basierend auf meiner Erfahrung als <strong>Auditor (Normazert)</strong>, konzentriert sich auf das, was Ihnen wirklich hilft:
        </p>
        <h3 className="text-xl font-semibold text-green-700 mt-5 mb-2">Ihr Mehrwert durch den praxisnahen Nachweis:</h3>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-4">
          <li>
            <strong>Spürbar effizientere Abläufe:</strong> Klare Arbeitsanweisungen und Checklisten reduzieren Fehler, sparen Zeit bei der Einarbeitung und senken den Materialverbrauch.
          </li>
          <li>
            <strong>Begeisterte Kunden:</strong> Nachweisbare Qualität und ein sichtbares Umweltengagement schaffen Vertrauen, führen zu weniger Reklamationen und stärken die Kundenbindung.
          </li>
          <li>
            <strong>Motivierteres Team:</strong> Klare Strukturen, definierte Verantwortlichkeiten und nachvollziehbare Prozesse erhöhen die Mitarbeiterzufriedenheit.
          </li>
          <li>
            <strong>Weniger Risiko, mehr Sicherheit:</strong> Systematische Einhaltung wichtiger Vorschriften (Arbeitssicherheit, Umweltschutz) gibt Ihnen Sicherheit.
          </li>
          <li>
            <strong>Konzentration aufs Wesentliche:</strong> Wir implementieren nur das, was für Ihren Erfolg als Gebäudereiniger wirklich zählt – verständlich und umsetzbar.
          </li>
        </ul>
        <p className="text-lg text-gray-700 italic">
          Dieser Ansatz geht über ein reines Zertifikat hinaus – er ist ein Werkzeug zur kontinuierlichen Verbesserung Ihres Betriebs.
        </p>
        <div className="mt-6">
          <Link href="/leistungen" className="text-blue-600 font-semibold hover:underline">
            Wie funktioniert der Prozess? Mehr erfahren &rarr;
          </Link>
        </div>
      </section>

      <section className="text-center mt-12 border-t pt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-5">Starten Sie die Optimierung Ihres Betriebs!</h2>
        <p className="text-lg text-gray-700 mb-6">Entdecken Sie, wie einfach und effektiv Qualitäts- und Umweltmanagement sein kann, wenn es auf die Praxis zugeschnitten ist. Lassen Sie uns unverbindlich sprechen.</p>
        <Link href="/kontakt" 
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl">
          Kostenloses Potenzialgespräch
        </Link>
      </section>
    </div>
  );
} 