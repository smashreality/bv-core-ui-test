import {
  colors,
  responsiveFontSizes,
  DeprecatedThemeOptions,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import { strongShadows } from "./shadows";
import typography from "./typography";
import { forwardRef } from "react";

export const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, onClick, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink
      data-testid="custom-mui-link-to-react-router-link"
      ref={ref}
      to={href}
      {...other}
    />
  );
});

declare module "@mui/material/styles" {
  interface Theme {
    TableDetailCell: {
      styleOverrides: {
        active: {
          backgroundColor: "rgba(0,0,0,0.075)";
        };
      };
    };
    background: {
      dark: string;
    };
  }
  interface Colors {
    neutralGrey: string;
    darkBackground: string;
  }
  interface Palette {
    colors: Colors;
  }
}

const primary = "#FC3650";
const secondary = "#333";

const baseOptions = {
  direction: "ltr",
  typography,

  components: {
    MuiButtonBase: {},
    MuiButtonContained: {
      styleOverrides: {
        root: {
          backgroundColor: primary,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 32,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.075)",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: secondary,
        },
        asterisk: {
          color: primary,
          "&$error": {
            color: primary,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: primary,
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: primary,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: { fontWeight: "bold" },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&$completed": {
            color: `${primary}!important`,
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          padding: "0px",
        },
      },
    },
  },
};

const themeOptions = {
  palette: {
    mode: "light",
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    colors: {
      neutralGrey: "#ccc",
      darkBackground: "#f4f6f8",
    },
    shape: {
      borderRadius: 0,
    },
  },
  shadows: strongShadows,
};

export const theme = responsiveFontSizes(
  createTheme(deepmerge(baseOptions, themeOptions) as DeprecatedThemeOptions)
);
