module.exports = {
    theme: {
      extend: {
        fontFamily: {
          'nothing-you-could-do': ['var(--font-nothing-you-could-do)', 'cursive'],
          // You can keep other font families here
        },
      },
    },
    // Make sure the default font is applied to all text elements
    plugins: [
      function({ addBase }) {
        addBase({
          'html': { fontFamily: 'var(--font-nothing-you-could-do), cursive' },
        });
      }
    ],
  };
  