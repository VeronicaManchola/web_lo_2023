import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import Logo from '@assets/icons/logo';
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
      main: '#B2935B',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#323232',
      contrastText: '#E3DFD6',
    },
    background: {
      default: '#D9D9D9',
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
        <Navigation title="Placeholder" sections={navSections} Logo={Logo} />
        {children}
        <Footer id="contacto" Logo={Logo} alt="Placeholder" />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Layout;
