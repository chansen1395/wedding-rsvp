// import { createMuiTheme } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'

// const theme = createMuiTheme({
const theme = createTheme({
  typography: {
    fontFamily: "Nanum Gothic",
  },
  palette: {
    primary: {
      main: "#313131",
    },
    secondary: {
      main: "#8ec5fc",
    },
  },
});

export default theme;
