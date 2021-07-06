module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {

    // fontSize: {
    //   base: '1.2rem'
    // },

    letterSpacing:{
      widest:'30px'
    },
    fontSize: {
     'basic': '23px',
     
    },
    padding:{
      '50':'50px',

    },
    /*width:{
      //'1/6': '15.5714286%',
      //'5':'70%',
      //'35':'75%',
      //'84':'30%',
      '70':'80%',
      '64':'8rem',
      '60':'60.3rem'
    },*/
    /*height:{
      //'5':'50%',                                                                                                        
      //'1':'10rem',
      '70':'35rem',
      '100':'41.09rem',
      '64':'12rem'

    },*/
    extend: {
      colors: {
        primary: '#D302BC'
      },
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
        // => @media (prefers-color-scheme: dark) { ... }
      }

      inset:{
        '5':'4.7rem',

      },
      right:{
        '5':'8rem',

      },
      fontFamily:{
        'montserrat':['Montserrat'],

      },
      
      
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
        // => @media (prefers-color-scheme: dark) { ... }
      },
      
    }
  },
  variants: {
    extend: {
      
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    }
  },
  variants: {},
  plugins: []
}
