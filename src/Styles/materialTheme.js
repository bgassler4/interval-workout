import { responsiveFontSizes } from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const colors = {
  primaryMain: "#800000",
  secondaryMain: "#004080",
};

export const materialTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: colors.primaryMain,
      },
      secondary: {
        main: colors.secondaryMain,
      },
    },
  })
);
