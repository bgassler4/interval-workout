import { responsiveFontSizes } from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const colors = {
  primaryMain: "#1e2761",
  secondaryMain: "#7a2048",
  thirdMain: "#408ec6",
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
      third: {
        main: colors.thirdMain,
      },
    },
  })
);
