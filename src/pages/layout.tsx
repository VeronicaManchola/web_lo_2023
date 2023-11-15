import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import Contact from '@modules/Contact';
import Navigation from '@modules/Navigation';
import { navSections } from '@utils/constants';

let theme = createTheme({
  typography: {
    fontFamily: ['Open Sauce One', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#E3DFD6',
      contrastText: '#323232',
    },
    secondary: {
      main: '#003C64',
      contrastText: '#E3DFD6',
    },
    info: {
      main: '#323232',
      contrastText: '#E3DFD6',
    },
    background: {
      default: '#ffffff',
      paper: 'transparent',
    },
  },
});
theme = responsiveFontSizes(theme);

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation title="Placeholder" sections={navSections} />
      {children}
      <Contact />
    </ThemeProvider>
  );
};

export default Layout;
