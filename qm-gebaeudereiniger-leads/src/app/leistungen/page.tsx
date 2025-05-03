import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadaten für die Leistungsseite
export const metadata: Metadata = {
  title: 'Leistungen: QM/UM-Nachweis für Gebäudereiniger (ISO 9001/14001)',
  description: 'NormCert bietet den effizienten QM/UM-Nachweis für Gebäudereiniger (ISO 9001 & 14001-basiert). Praxisnah, verständlich & auf Ihren Betrieb zugeschnitten. Gewinnen Sie Ausschreibungen!',
};

// Icons (Beispiele)
const ChatBubbleLeftRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-600">
      <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029l.774.18a.75.75 0 00.44-.046l1.52-1.52a.75.75 0 00-.046-.44l-.18-.774A6.735 6.735 0 0012 15a6.735 6.735 0 002.426 5.131l-.18.774a.75.75 0 00-.046.44l1.52 1.52a.75.75 0 00.44.046l.774-.18a6.721 6.721 0 003.583 1.029 6.707 6.707 0 001.196-.106.75.75 0 00.553-1.004l-1.16-3.901A6.716 6.716 0 0019.5 15c0-3.712-3.013-6.725-6.75-6.725S6 11.288 6 15a6.716 6.716 0 001.907 4.633l-1.16 3.901a.75.75 0 00.553 1.004zm0-15.078A6.707 6.707 0 006 6.75a6.721 6.721 0 003.583 1.029l.774-.18a.75.75 0 00.44.046l1.52 1.52a.75.75 0 00-.046.44l-.18.774A6.735 6.735 0 0012 10.5a6.735 6.735 0 002.426-5.131l-.18-.774a.75.75 0 00-.046-.44l1.52-1.52a.75.75 0 00.44-.046l.774.18A6.721 6.721 0 0018 6.75a6.707 6.707 0 001.196.106.75.75 0 00.553-1.004l-1.16-3.901A6.716 6.716 0 0019.5 2.25c-3.737 0-6.75 3.013-6.75 6.725S6.737 15.7 10.487 15.7A6.716 6.716 0 0012.394 11.067l1.16-3.9a.75.75 0 00-.553-1.004z" clipRule="evenodd" />
    </svg>
);
const ClipboardDocumentCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-600">
      <path fillRule="evenodd" d="M10.5 3A2.25 2.25 0 008.25 5.25v.75h7.5v-.75A2.25 2.25 0 0013.5 3h-3zm-2.693.15a.75.75 0 01.988-.988l.046.046A.75.75 0 019 3h6a.75.75 0 01.659.308l.046-.046a.75.75 0 11.988.988l-1.05 1.05A3.75 3.75 0 0113.5 6h-3a3.75 3.75 0 01-2.606-1.05L7.807 3.15zM5.25 7.5A2.25 2.25 0 003 9.75v9.75A2.25 2.25 0 005.25 21.75h13.5A2.25 2.25 0 0021 19.5V9.75A2.25 2.25 0 0018.75 7.5H5.25zM14.47 12.53a.75.75 0 10-1.06-1.06l-3 3a.75.75 0 000 1.06l1.5 1.5a.75.75 0 101.06-1.06L12.72 15l2.25-2.25a.75.75 0 00-1.06-1.06L10.5 14.19l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l3.75-3.75z" clipRule="evenodd" />
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-600">
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.104.75.75 0 00.028-.977l-.028-.028A8.61 8.61 0 0019.75 17.25a.75.75 0 10-1.5 0a7.123 7.123 0 011.118 1.878z" />
    </svg>
);
const AcademicCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-600">
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0121.75 6.75c.71 0 1.25.54 1.25 1.25v6c0 .69-.54 1.25-1.25 1.25h-.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v1.5a.75.75 0 01-.75.75h-.75c-.71 0-1.25-.54-1.25-1.25v-6c0-.71.54-1.25 1.25-1.25A60.653 60.653 0 0111.7 2.805z" />
        <path d="M12.983 2.084a.75.75 0 00-.966 0l-8.25 4.5a.75.75 0 00.484 1.374h16.5a.75.75 0 00.484-1.374l-8.25-4.5z" />
        <path d="M2.25 8.25a.75.75 0 000 1.5v7.5a.75.75 0 00.75.75h18a.75.75 0 00.75-.75v-7.5a.75.75 0 000-1.5h-1.5a.75.75 0 00-.75.75v3a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75H2.25z" />
    </svg>
);
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-600">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block ml-1">
        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
);

export default function LeistungenPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 md:space-y-20">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Mehr Aufträge gewinnen: Ihr praxisnaher QM/UM-Nachweis
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Sie sind Gebäudereiniger und wollen bei <strong>Ausschreibungen punkten</strong> oder <strong>anspruchsvolle Kunden überzeugen</strong>? Ein Nachweis über Ihr Qualitäts- (QM) und Umweltmanagement (UM) ist oft der Schlüssel – aber eine klassische ISO-Zertifizierung ist zu teuer?
        </p>
        <p className="text-lg text-blue-800 font-semibold">
          Hier setzt unsere praxisnahe Lösung an: Ein maßgeschneiderter QM/UM-Nachweis, der effizient, verständlich und auf den Nutzen für Ihren Betrieb ausgerichtet ist.
        </p>
      </section>

      <section className="p-8 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Ihr Vorteil: Entwickelt vom Experten – Fokussiert auf die Praxis</h2>
        <p className="text-lg text-gray-800 mb-3 text-center max-w-3xl mx-auto">
          Dieser Ansatz basiert auf Praxiserfahrung und genauer Kenntnis der Anforderungen von DIN 9001 und DIN 14001. Er berücksichtigt, worauf es bei Prüfungen und Ausschreibungen ankommt, vermeidet aber unnötige Bürokratie für KMU.
        </p>
        <p className="text-lg text-gray-800 text-center max-w-3xl mx-auto">
          Der Fokus liegt darauf, Ihnen ein System an die Hand zu geben, das <strong>funktioniert, verstanden wird und Ihnen hilft, Aufträge zu gewinnen</strong> – nicht nur Ordner füllt.
        </p>
         <div className="text-center mt-6">
             <Link href="/ueber-uns"
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors duration-200">
                Mehr über den pragmatischen Ansatz
                <ArrowRightIcon />
              </Link>
         </div>
      </section>

      {/* Teaser für den Selbstcheck - HIER EINGEFÜGT */}
      <section className="text-center py-8 px-4">
        <div className="inline-block bg-yellow-100 p-6 rounded-lg border border-yellow-200 shadow-sm">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">Passt dieser Ansatz zu Ihnen?</h3>
            <p className="text-gray-700 mb-4">
                Finden Sie es heraus! Machen Sie unseren schnellen, kostenlosen QM/UM-Selbstcheck.
            </p>
            <Link href="/werkzeuge/qm-um-selbstcheck"
                    className="inline-flex items-center bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300 shadow">
                Zum Selbstcheck
            </Link>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Der Weg zu Ihrem Nachweis: Effizient, Verständlich, Begleitet</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center items-start">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-4">
                <div className="mb-3 p-3 bg-blue-100 rounded-full"><ChatBubbleLeftRightIcon /></div>
                <p className="font-semibold text-gray-800 mb-1">1. Erstgespräch</p>
                <p className="text-sm text-gray-600">Klärung Ihrer Ziele & Eignung des Ansatzes.</p>
            </div>
             {/* Step 2 */}
            <div className="flex flex-col items-center p-4">
                <div className="mb-3 p-3 bg-blue-100 rounded-full"><ClipboardDocumentCheckIcon /></div>
                <p className="font-semibold text-gray-800 mb-1">2. Praxis-Check</p>
                <p className="text-sm text-gray-600">Analyse Ihrer Abläufe & konkrete Planung.</p>
            </div>
            {/* Step 3 */}
             <div className="flex flex-col items-center p-4">
                <div className="mb-3 p-3 bg-blue-100 rounded-full"><UsersIcon /></div>
                <p className="font-semibold text-gray-800 mb-1">3. Umsetzung</p>
                <p className="text-sm text-gray-600">Sie erhalten Vorlagen & Unterstützung bei der Implementierung.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center p-4">
                <div className="mb-3 p-3 bg-blue-100 rounded-full"><AcademicCapIcon /></div>
                <p className="font-semibold text-gray-800 mb-1">4. Internes Audit</p>
                <p className="text-sm text-gray-600">Gemeinsame Prüfung der Funktion im Alltag.</p>
            </div>
            {/* Step 5 */}
             <div className="flex flex-col items-center p-4">
                <div className="mb-3 p-3 bg-blue-100 rounded-full"><CheckCircleIcon /></div>
                <p className="font-semibold text-gray-800 mb-1">5. Ihr Nachweis</p>
                <p className="text-sm text-gray-600">Erhalt Ihres Nachweises als Qualitätsbeweis.</p>
            </div>
        </div>
         <p className="mt-6 text-center text-md text-gray-600 italic">
           Dieser Prozess ist deutlich schneller und kosteneffizienter als eine formale ISO-Zertifizierung, liefert aber den notwendigen Nachweis für viele Auftraggeber.
         </p>
      </section>

      <section className="pt-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Was Ihr QM/UM-Nachweis beinhaltet (Fokus Ausschreibungen)</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-2xl mb-3 text-blue-700">Qualitätsmanagement (QM)</h3>
             <p className="text-gray-600 mb-4">Basis für Zuverlässigkeit und konsistente Leistung:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Klare Abläufe:</strong> Nachvollziehbare Arbeitsanweisungen.</li>
              <li><strong>Qualitätskontrollen:</strong> Systematische Prüfung der Leistung.</li>
              <li><strong>Reklamationsmanagement:</strong> Professioneller Umgang mit Feedback.</li>
              <li><strong>Mitarbeiterqualifikation:</strong> Nachweislich geschultes Personal.</li>
              <li className="mt-3">
                <Link href="/din-9001-gebaeudereiniger" className="inline-flex items-center text-blue-600 hover:underline font-semibold">
                    Details zu QM (ISO 9001 Fokus) <ArrowRightIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-2xl mb-3 text-green-700">Umweltmanagement (UM)</h3>
             <p className="text-gray-600 mb-4">Basis für Nachhaltigkeit und verantwortungsvolles Handeln:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Umweltfreundliche Mittel:</strong> Nachweis über Einsatz & Dosierung.</li>
              <li><strong>Ressourcenschonung:</strong> Maßnahmen für Wasser & Energie.</li>
              <li><strong>Abfallkonzept:</strong> Systematische Mülltrennung & -vermeidung.</li>
              <li><strong>Mitarbeiterbewusstsein:</strong> Geschultes Personal für Umweltaspekte.</li>
              <li className="mt-3">
                <Link href="/din-14001-gebaeudereiniger" className="inline-flex items-center text-green-600 hover:underline font-semibold">
                    Details zu UM (ISO 14001 Fokus) <ArrowRightIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-lg text-gray-800 font-medium bg-sky-100 p-5 rounded-lg border border-sky-200">
          Dieser kombinierte QM/UM-Nachweis ist ideal, um die häufigsten Anforderungen in Ausschreibungen effizient zu erfüllen!
        </p>
      </section>

      {/* Optional: Abschnitt für weitere Leistungen (auskommentiert) */}

      <section className="text-center mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">Bereit für mehr Erfolg bei Ausschreibungen und Kunden?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Finden wir gemeinsam heraus, wie mein praxisnaher QM/UM-Ansatz (basierend auf NormCert-Methoden) Ihrem Gebäudereinigungsbetrieb helfen kann.</p>
          <Link href="/kontakt"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Jetzt kostenloses Erstgespräch vereinbaren!
            <ArrowRightIcon />
          </Link>
      </section>

    </div>
  );
} 