/* import { Theme } from '@unocss/preset-uno' */
import { colors } from '@unocss/preset-wind'

export const primary = {
  // oxford
  DEFAULT: '#3E5166',
  50: '#B7C4D3',
  100: '#A7B7C9',
  200: '#879DB6',
  300: '#6784A3',
  400: '#516A86',
  500: '#3E5166',
  600: '#2B3846',
  700: '#171F27',
  800: '#040507',
  900: '#000000',
}

export const secondary = {
  // caribbean-green
  DEFAULT: '#34D399',
  50: '#F1FCF8',
  100: '#DCF7ED',
  200: '#B2EED8',
  300: '#88E5C3',
  400: '#5EDCAE',
  500: '#34D399',
  600: '#26AE7C',
  700: '#1D845F',
  800: '#145A41',
  900: '#0B3023',
}

export const ASTheme = {
  fontFamily: {
    body: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    heading:
        '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    sans: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  colors: {
    ...colors,
    transparent: 'transparent',
    accent: colors?.sky,
    neutral: colors?.zink,
    success: colors?.lime,
    warning: colors?.amber,
    danger: colors?.rose,
    // primary: {
    //   50: '#ff5032',
    //   100: '#ff4628',
    //   200: '#ff3c1e',
    //   300: '#f73214',
    //   400: '#ed280a',
    //   500: '#e31e00',
    //   600: '#d91400',
    //   700: '#cf0a00',
    //   800: '#c50000',
    //   900: '#bb0000',
    // },
    primary,
    secondary,
    link: {
      50: '#f2fcfe',
      100: '#e6f8fd',
      200: '#bfeefa',
      300: '#99e4f7',
      400: '#4dd0f1',
      500: '#00bceb',
      600: '#00a9d4',
      700: '#008db0',
      800: '#00718d',
      900: '#005c73',
    },
    info: {
      50: '#f3f9fc',
      100: '#e6f4f8',
      200: '#c1e3ef',
      300: '#9bd2e5',
      400: '#50b1d1',
      500: '#058fbd',
      600: '#0581aa',
      700: '#046b8e',
      800: '#035671',
      900: '#02465d',
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  boxShadow: {
    active: 'inset 4px 4px 2px 0 rgba(0, 0, 0, 0.08)',
    button: '4px 4px 1px 0px var(--un-shadow-color)',
  },
}
