/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      // dark theme
      'very-dark-blue': 'hsl(235, 21%, 11%)',
      'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
      'light-grayish-blue': 'hsl(234, 39%, 85%)',
      'dark-grayish-blue': 'hsl(234, 11%, 52%)',
      'very-dark-grayish': 'hsl(233, 14%, 35%)',
      'very-dark-grayish-blue': 'hsl(237, 14%, 26%)',
      /* hover */
      'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
      // primary
      'bright-blue': 'hsl(220, 98%, 61%)',
      // light theme
      'very-light-gray': 'hsl(0, 0%, 98%)',
      'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
      'light-g-blue': 'hsl(233, 11%, 84% )',
      'dark-g-blue': 'hsl(236, 9%, 61%)',
      'very-dark-g-blue': 'hsl(235, 19%, 35%)',
      white : '#fff',
      black: '#000',
      'light-blue': 'hsl(192, 100%, 67%)',
      'purple': 'hsl(280, 87%, 65%)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mobile-light': "url('./assets/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('./assets/images/bg-mobile-dark.jpg')",
        'desktop-light': "url('./assets/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('./assets/images/bg-desktop-dark.jpg')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
