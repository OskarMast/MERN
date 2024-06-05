/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React TS Base Styles
import colors from 'src/mui/assets/theme-dark/base/colors';
import typography from 'src/mui/assets/theme-dark/base/typography';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'src/mui/assets/theme-dark/functions/pxToRem';

const { white, text, info, secondary } = colors;
const { size } = typography;

const contained = {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(29.6),
    color: text.main,
    padding: `${pxToRem(7.2)} ${pxToRem(19.2)}`,

    '&:hover': {
      backgroundColor: white.main,
    },

    '&:active, &:active:focus, &:active:hover': {
      opacity: 0.85,
    },

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(12.8)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(23.2),
    padding: `${pxToRem(4.8)} ${pxToRem(14.4)}`,
    fontSize: size.xs,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(9.6)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(35.2),
    padding: `${pxToRem(9.6)} ${pxToRem(51.2)}`,
    fontSize: size.sm,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(17.6)} !important`,
    },
  },

  primary: {
    backgroundColor: info.main,

    '&:hover': {
      backgroundColor: info.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: info.focus,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    '&:hover': {
      backgroundColor: secondary.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
