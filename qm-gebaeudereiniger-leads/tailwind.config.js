/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Suche nach Klassen in allen relevanten Dateien im src-Verzeichnis
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Definiere 'sans' als Standard-Schriftart und verweise auf die CSS-Variable für Inter
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      // Hier könnten später weitere Theme-Erweiterungen hinzukommen (z.B. eigene Farben)
    },
  },
  plugins: [
    // Aktiviere das Typography-Plugin für das Styling von Textinhalten (Blog etc.)
    require('@tailwindcss/typography'),
  ],
}; 