export default {
  colors: {
    background: '#fff',
    body: 'inherit',
    gray: '#ccc',
    heading: 'inherit',
    lightgray: '#f6f6f6',
    primary: '#33e',
    secondary: '#11a',
    text: '#000',
    yellow: '#ffc',
    // eslint-disable-next-line sort-keys
    dark: {
      background: '#111122',
      body: 'inherit',
      gray: '#223',
      heading: 'inherit',
      lightgray: '#161628',
      primary: '#3af',
      secondary: '#18d',
      text: '#fff',
      yellow: '#ff0',
    },
  },
  fontWeights: {
    body: 400,
    heading: 600,
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: '"Roboto Mono", Menlo, Consolas, monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  mediaQueries: {
    big: '@media screen and (min-width: 40em)',
  },
  styles: {
    a: {
      color: 'primary',
      // eslint-disable-next-line sort-keys
      '&:hover': {
        color: 'secondary',
      },
    },
    h1: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      color: 'heading',
      fontFamily: 'heading',
      fontSize: [5, 6],
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h2: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      color: 'heading',
      fontFamily: 'heading',
      fontSize: [4, 5],
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h3: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      color: 'heading',
      fontFamily: 'heading',
      fontSize: [3, 4],
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h4: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      color: 'heading',
      fontFamily: 'heading',
      fontSize: 3,
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h5: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      color: 'heading',
      fontFamily: 'heading',
      fontSize: 2,
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h6: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      color: 'heading',
      fontFamily: 'heading',
      fontSize: 1,
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    p: {
      color: 'body',
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'body',
      lineHeight: 'body',
    },
    // eslint-disable-next-line sort-keys
    code: {
      fontFamily: 'monospace',
      fontSize: 1,
      overflowX: 'auto',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      color: 'lightgray',
      my: 4,
    },
    img: {
      height: 'auto',
      maxWidth: '100%',
    },
    inlineCode: {
      bg: 'lightgray',
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      my: 4,
      width: '100%',
    },
    th: {
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px',
      borderColor: 'inherit',
      paddingBottom: '4px',
      paddingLeft: 0,
      paddingRight: '4px',
      paddingTop: '4px',
      textAlign: 'left',
      verticalAlign: 'bottom',
    },
    // eslint-disable-next-line sort-keys
    td: {
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderColor: 'inherit',
      paddingBottom: '4px',
      paddingLeft: 0,
      paddingRight: '4px',
      paddingTop: '4px',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    ul: {
      pl: 3,
    },
  },
  // eslint-disable-next-line sort-keys
  prism: {
    plain: {
      backgroundColor: '#f6f6f6',
      color: '#282a2e',
    },
    styles: [
      {
        style: {
          color: '#666',
        },
        types: ['comment'],
      },
      {
        style: {
          color: '#444',
        },
        types: ['string', 'number', 'builtin', 'variable'],
      },
      {
        style: {
          color: 'rgb(40, 42, 46)',
        },
        types: ['class-name', 'function', 'tag', 'attr-name'],
      },
    ],
    // eslint-disable-next-line sort-keys
    dark: {
      plain: {
        backgroundColor: '#161628',
        color: '#eee',
      },
      styles: [
        {
          style: {
            color: '#999',
          },
          types: ['comment'],
        },
        {
          style: {
            color: '#fff',
          },
          types: ['string', 'number', 'builtin', 'variable'],
        },
        {
          style: {
            color: '#eee',
          },
          types: ['class-name', 'function', 'tag', 'attr-name'],
        },
      ],
    },
  },
};
