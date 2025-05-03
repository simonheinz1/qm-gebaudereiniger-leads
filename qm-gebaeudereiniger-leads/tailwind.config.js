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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
         // Benutzerdefinierte Farben hier, falls vorhanden
         // Beispiel:
         // 'brand-blue': '#007bff',
         // 'brand-green': '#28a745',
       },
    },
  },
  plugins: [
    // Aktiviere das Typography-Plugin für das Styling von Textinhalten (Blog etc.)
    require('@tailwindcss/typography'),
    // Fügen Sie hier weitere Tailwind Plugins hinzu
  ],
}; 