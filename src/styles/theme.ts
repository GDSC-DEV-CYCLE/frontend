const theme = {
  colors: {
    primary: '#5CDBAD',
    primary15: '#5CDBAD26',
    primaryDeep: '#34B486',
    error: '#E46F68',
    black: '#2A2A36',
    white: '#FFFFFF',
    gray1: '#F4F4F4',
    gray2: '#D9D9D9',
    gray3: '#9A9A9A',
  },
  radius: {
    sm: '4px',
    md: '8px',
  },
  spacing: {
    sm: '4px',
    md: '8px',
  },
} as const;

export type ThemeExtends = typeof theme;
export default theme;
