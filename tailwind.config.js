module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD71D',     // primaryColor
        secondary: '#649b10',   // secondaryColor
        success: '#5758e0',     // successColor
        info: '#82786E',        // infoColor
        warning: '#5b686b',     // warningColor
        danger: '#465052',      // dangerColor
        // My Custom Colors
        TextPrimaryColor:   `#FFD71D`,
        TextSecondaryColor: `#649b10`,
        HyperlinkColor:     `#649b10`,      // textColor
        HoverColor:         `#CAFF6E`,
        // Additional set colors:
        set1: '#6f9b2b',
        set3: '#24292e',
        set4: '#0077b5',
        set5: '#ffbc00'
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        oxygen: ['Oxygen', 'sans-serif'],
        // You can add other fonts like 'PT Sans Narrow', 'Raleway', etc. if needed.
      },
      fontSize: {
        // Using the provided sizes (rem values can be adjusted as needed)
        display1: ['5.5rem', { lineHeight: '1.2' }],
        display2: ['3rem', { lineHeight: '1.2' }],
        display5: ['1.6rem', { lineHeight: '1.2' }],
        display7: ['1.2rem', { lineHeight: '1.2' }],
        display4: ['1rem', { lineHeight: '1.2' }],
      },
      borderRadius: {
        // If isRoundedButtons is false, you might want to leave buttons with no rounding.
        none: '0',
      },
    },
  },
  plugins: [],
};
