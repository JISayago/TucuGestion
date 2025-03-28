const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('./tailwind.config.js'), //gúrate de que apunta a la configuración correcta
        require('autoprefixer'),
      ],
    },
  },
};