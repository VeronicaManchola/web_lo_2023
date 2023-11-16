import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import logo from '@assets/images/logo.webp';
import Footer from '@modules/Footer/Footer';
import Navigation from '@modules/Navigation/Navigation';
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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation title="Placeholder" sections={navSections} logo={logo.src} />
        {children}
        <Footer id="contacto" logo={logo.src} alt="Placeholder" />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Layout;
