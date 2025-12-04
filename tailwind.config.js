module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBg: '#aaf0c9',
        darkBg: '#000435',
        accent: '#ffd166',
        muted: '#7b8aa0'
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
