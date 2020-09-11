import Layout from 'atomic-layout'

Layout.configure({
  breakpoints: {
    xs: {
      maxWidth: 300
    },
    sm: {
      minWidth: 301,
      maxWidth: 600
    },
    md: {
      minWidth: 601,
      maxWidth: 960
    },
    lg: {
      minWidth: 961,
      maxWidth: 1280
    },
    xl: {
      minWidth: 1281
    }
  }
})
