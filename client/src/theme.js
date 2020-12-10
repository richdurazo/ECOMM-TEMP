import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    background: {
        paper: "#fff",
        default: "#fafafa"
    },
    primary: {
        light: "#5f6b72",
        main: "#37474f",
        dark: "#263137",
        contrastText: "#fff",
    },
    secondary: {
        light: "#ffcf33",
        main: "#ffc400",
        dark: "#b28900",
        contrastText: "#fff"
    },
    error: {
      light: "#ff4569",
      main: "#ff1744",
      dark: "#b2102f",
      contrastText: "#fff"
    }
  }
});

export default theme;