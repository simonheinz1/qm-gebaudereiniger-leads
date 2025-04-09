import React from 'react';
import Link from 'next/link';

const ChecklisteAusschreibungen = () => {
  return (
    <article className="prose lg:prose-xl max-w-none space-y-6">
      <h1>Checkliste: Anforderungen bei Reinigungs-Ausschreibungen verstehen & erfüllen</h1>
      <p className="lead text-lg text-gray-600">
        Öffentliche und große private Ausschreibungen für Gebäudereinigungsleistungen sind oft komplex. Neben dem Preis spielen qualitative Faktoren und formale Nachweise eine entscheidende Rolle. Diese Checkliste gibt Ihnen einen Überblick über häufige Anforderungen.
      </p>

      <section>
        <h2>1. Formale & Rechtliche Voraussetzungen</h2>
        <ul>
          <li><strong>Gewerbeanmeldung & Eintragung:</strong> Nachweis über ein angemeldetes Gewerbe im Gebäudereiniger-Handwerk.</li>
          <li><strong>Unbedenklichkeitsbescheinigungen:</strong> Nachweise von Finanzamt, Krankenkassen und Berufsgenossenschaft über die ordnungsgemäße Abführung von Steuern und Sozialabgaben.</li>
          <li><strong>Betriebshaftpflichtversicherung:</strong> Nachweis über eine ausreichende Versicherungssumme für Personen-, Sach- und Vermögensschäden.</li>
          <li><strong>Mindestlohn & Tariftreue:</strong> Bestätigung der Einhaltung gesetzlicher und ggf. tariflicher Lohnvorgaben.</li>
          <li><strong>(Erweitertes) Führungszeugnis:</strong> Je nach Objekt (z.B. Schulen, Kitas) kann dies für das eingesetzte Personal verlangt werden.</li>
        </ul>
      </section>

      <section>
        <h2>2. Nachweise zu Qualität & Umwelt (QM/UM)</h2>
        <p>Hier punkten Sie mit System! Auch wenn nicht immer explizit 'DIN ISO 9001/14001' gefordert ist, erwarten Auftraggeber Nachweise für strukturierte Prozesse.</p>
        <ul>
          <li><strong>Qualitätsmanagementsystem (QM):</strong> Beschreibung oder Nachweis (Zertifikat) eines Systems zur Sicherung der Reinigungsqualität (z.B. Arbeitsanweisungen, Kontrollen, Schulungen, Umgang mit Reklamationen). <span className="text-sm text-gray-600">(Auch praxisnahe Nachweise können hier anerkannt werden!)</span></li>
          <li><strong>Umweltmanagementsystem (UM):</strong> Nachweis über umweltschonendes Arbeiten (z.B. Einsatz umweltfreundlicher Reinigungsmittel, Mülltrennung, Wassersparmaßnahmen, Schulung der Mitarbeiter).</li>
          <li><strong>Referenzen:</strong> Nachweis über erfolgreich durchgeführte Reinigungsarbeiten in vergleichbaren Objekten.</li>
          <li><strong>Schulungsnachweise:</strong> Belege über die Qualifikation und regelmäßige Schulung der Mitarbeiter (z.B. Hygiene, Arbeitssicherheit, Anwendungstechnik).</li>
        </ul>
        <div className="bg-blue-50 p-4 rounded-md my-4 border border-blue-200">
          <h3 className="font-semibold text-blue-700">Erfüllen Sie die Anforderungen einfacher:</h3>
          <p>Ein praxisnahes, auf Ihr Unternehmen zugeschnittenes QM/UM-System ist oft der effizienteste Weg, um die Anforderungen vieler Ausschreibungen glaubhaft nachzuweisen – auch ohne formale DIN-Zertifizierung. Damit punkten Sie bei Ausschreibungen!</p>
          <p className="mt-2">
            <Link href="/(landingpages)/zertifizierung-ausschreibung" className="text-blue-600 font-semibold hover:underline">
              » Erfahren Sie hier, wie Sie den Nachweis für Ausschreibungen erhalten
            </Link>
          </p>
        </div>
      </section>

      <section>
        <h2>3. Leistungsbeschreibung & Konzept</h2>
        <ul>
          <li><strong>Verständnis der Ausschreibung:</strong> Klares Eingehen auf die spezifischen Anforderungen und Reinigungsbereiche des Leistungsverzeichnisses.</li>
          <li><strong>Reinigungskonzept:</strong> Detaillierte Darstellung, WIE die Reinigung durchgeführt wird (Methoden, Häufigkeiten, eingesetzte Mittel und Maschinen).</li>
          <li><strong>Personalplanung:</strong> Angaben zur Anzahl und Qualifikation des eingesetzten Personals.</li>
          <li><strong>Objektleitung & Ansprechpartner:</strong> Benennung verantwortlicher Personen für die Kommunikation und Qualitätskontrolle vor Ort.</li>
        </ul>
      </section>

      <section>
        <h2>Fazit</h2>
        <p>Eine erfolgreiche Bewerbung auf Ausschreibungen erfordert mehr als nur einen guten Preis. Strukturierte Prozesse, nachweisbare Qualität und die Erfüllung formaler Kriterien sind essenziell. Ein gut eingeführtes Managementsystem ist dabei eine wertvolle Unterstützung.</p>
        <p>Benötigen Sie Hilfe bei der Erfüllung dieser Anforderungen oder möchten Sie Ihr Unternehmen optimal für Ausschreibungen aufstellen? <Link href="/kontakt" className="text-blue-600 hover:underline">Kontaktieren Sie uns für eine unverbindliche Beratung!</Link></p>
      </section>

    </article>
  );
};

export default ChecklisteAusschreibungen; 