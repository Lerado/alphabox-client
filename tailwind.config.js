module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
    
  },
  purge: [],
  theme: {
    letterSpacing:{
      widest:'30px'
    },
    fontSize: {
     'basic': '23px',
     
    },
    padding:{
      '50':'50px',

    },
    width:{
      //'1/6': '15.5714286%',
      //'5':'70%',
      //'35':'75%',
      //'84':'30%',
      '70':'80%',
      '64':'8rem',
      '60':'60.3rem'
    },
    height:{
      //'5':'50%',                                                                                                        
      //'1':'10rem',
      '70':'35rem',
      '100':'41.09rem',
      '64':'12rem'

    },
    extend: {
      colors: {
        primary: '#D302BC',
       // blue:'#5957A7'
       font1:'#5959A7',
       user_font:'#697EBE',
       blue_box1:'#005AA2',
       blue_box11:'#131441',
       indigo_box2:'#BA4198',
       indigo_box21:'#7A4A9D',
       orange_box3:'#FEBC11',
       orange_box31:'#F79023',
       green_box4:'#6EBF5F',
       green_box41:'#286432',
       gray_box5:'#A7A9AC',
       gray_box51:'#58595B',
       orange:'#F57F20',
       black:'#010101',
       shadow_grid:'#F1F3F7',
      },
      inset:{
        '5':'4.7rem',

      },
      right:{
        '5':'8rem',

      },
      fontFamily:{
        'montserrat':['Montserrat'],

      },
      backgroundImage: theme => ({
        'intro': "url('alphabox-client/src/assets/backgrounds/intro-bg.png')",
        'courbe':"url('alphabox-client/src/assets/backgrounds/courbe-bg.png')",
        
       }),
      
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
        // => @media (prefers-color-scheme: dark) { ... }
      },
      backgroundImage: theme => ({
        'direction': "url('/src/assets/avatar/avatar-direction.png')",
        'footer-texture': "url('/img/footer-texture.png')",
       })
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      animation: ['motion-safe'],
    }
  },
  
  plugins: [],
}
