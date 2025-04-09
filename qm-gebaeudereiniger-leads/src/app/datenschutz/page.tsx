import React from 'react';

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto prose lg:prose-xl">
      <h1>Datenschutzerklärung</h1>

      <p>
        Wir legen großen Wert auf den Schutz Ihrer Daten. Nachfolgend informieren wir Sie über die Erhebung und Verwendung personenbezogener Daten bei Nutzung unserer Website.
      </p>

      {/* 
        Hier müssen detaillierte Angaben folgen, z.B. über:
        - Verantwortliche Stelle
        - Ihre Rechte als Betroffener (Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit, Beschwerderecht)
        - Erhebung personenbezogener Daten beim Besuch der Website (Server-Logfiles)
        - Kontaktaufnahme (z.B. per E-Mail oder Kontaktformular)
        - Einsatz von Cookies (Art, Zweck, Rechtsgrundlage, Speicherdauer, Widerspruchsmöglichkeit)
        - Einsatz von Analyse-Tools (z.B. Google Analytics, Matomo) - falls verwendet
        - Einbindung von Diensten Dritter (z.B. Google Fonts, Karten, Social Media Plugins) - falls verwendet
        - SSL- bzw. TLS-Verschlüsselung
        - Aktualität und Änderung dieser Datenschutzerklärung
      */}

      <h2>Kontaktformular</h2>
      <p>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
      </p>
      <p>
         Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>

       <p className="mt-8 p-4 border border-red-300 bg-red-50 text-red-700 rounded">
        <strong>Wichtiger Hinweis:</strong> Dies ist nur ein Platzhalter und deckt nur einen kleinen Teil ab.
        Eine vollständige und korrekte Datenschutzerklärung ist komplex und muss auf Ihre spezifische Website und Datenverarbeitungsprozesse zugeschnitten sein.
        Nutzen Sie unbedingt einen professionellen Datenschutzgenerator oder lassen Sie sich rechtlich beraten.
      </p>

    </div>
  );
} 