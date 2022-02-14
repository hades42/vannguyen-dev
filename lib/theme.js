import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
    //Custome for shortcode
    code: {
      color: '#fabd2f',
      backgroundColor: 'gray.700',
      paddingLeft: '4px',
      paddingRight: '4px',
      paddingTop: '2px',
      paddingBottom: '2px',
      borderRadius: '0.35rem',
    },

    blockquote: {
      borderLeft: '3px solid #ccc',
      padding: '0.5em 10px',
      color: mode('gray.700', 'gray.400')(props),
      fontStyle: 'italic',
      margin: '15px 15px 15px 0',
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: props => ({
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: '#88ccca',
  globalBlue: '#2D3748',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
