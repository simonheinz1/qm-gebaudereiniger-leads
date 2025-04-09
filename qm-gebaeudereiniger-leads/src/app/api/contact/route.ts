import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Diese Funktion behandelt POST-Anfragen an /api/contact
export async function POST(request: Request) {
  // *** DIAGNOSE: Logge alle verfügbaren Umgebungsvariablen ***
  console.log('Verfügbare Umgebungsvariablen (process.env):', process.env);

  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Einfache Validierung
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, E-Mail und Nachricht sind erforderlich.' }, { status: 400 });
    }

    // Umgebungsvariablen laden
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const receiverEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL;

    // *** DIAGNOSE: Logge die spezifischen SMTP-Variablen ***
    console.log('SMTP Host:', smtpHost);
    console.log('SMTP Port:', smtpPort);
    console.log('SMTP User:', smtpUser);
    // Logge das Passwort NICHT in Produktionsumgebungen! Nur zum Debuggen hier.
    console.log('SMTP Password vorhanden:', !!smtpPassword);
    console.log('Receiver Email:', receiverEmail);

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !receiverEmail) {
        console.error('Fehlende SMTP-Konfiguration in Umgebungsvariablen.');
        return NextResponse.json({ error: 'Server-Konfigurationsfehler.' }, { status: 500 });
    }

    // Nodemailer Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort), // Port muss eine Zahl sein
      secure: Number(smtpPort) === 465, // true für Port 465, false für andere (wie 587)
      auth: {
        user: smtpUser, // 'apikey' für SendGrid
        pass: smtpPassword, // Dein SendGrid API Key
      },
    });

    // E-Mail Optionen
    const mailOptions = {
      from: receiverEmail, // Absenderadresse (kann oft die gleiche wie Empfänger sein oder eine von SendGrid verifizierte)
      to: receiverEmail, // Empfängeradresse aus .env.local
      replyTo: email, // Setzt den "Antwort an" Header auf die E-Mail des Nutzers
      subject: `Neue Kontaktanfrage von ${name} (${company || 'Keine Firma'})`,
      text: `Name: ${name}\nE-Mail: ${email}\nFirma: ${company || '-'}\n\nNachricht:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Firma:</strong> ${company || '-'}</p>
        <hr>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    console.log('Kontaktanfrage-E-Mail erfolgreich gesendet an:', receiverEmail);
    return NextResponse.json({ success: true, message: 'Nachricht erfolgreich gesendet!' });

  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    // Gib im Fehlerfall mehr Details aus, wenn möglich
    const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler.';
    return NextResponse.json({ error: `Fehler beim Senden der Nachricht: ${errorMessage}` }, { status: 500 });
  }
} 