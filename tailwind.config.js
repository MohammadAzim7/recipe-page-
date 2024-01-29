/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      /* Colors */
      colors:{

        /* Primary*/
        Nutmeg: "hsl(14, 45%, 36%)",
        DarkRaspberry: "hsl(332, 51%, 32%)",

        /* Neutral*/

        White: "hsl(0, 0%, 100%)",
        RoseWhite: "hsl(330, 100%, 98%)",
        Eggshell: "hsl(30, 54%, 90%)",
        LightGrey: "hsl(30, 18%, 87%)",
        WengeBrown: "hsl(30, 10%, 34%)",
        DarkCharcoal: "hsl(24, 5%, 18%)",

        /* color for link address */
        Link: "hsl(228, 45%, 44%)",
      },
      fontFamily :{
        'YoungSerif' :['Young serif'],
        'Outfit':['Outfit'],
      }
    },
  },
  plugins: [],
}

