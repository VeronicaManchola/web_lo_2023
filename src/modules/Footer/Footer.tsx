import React from 'react';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { LogoProps } from '@assets/icons/logo';

import styles from './Footer.module.css';

interface FooterProps {
  Logo: ({ color, width, height }: LogoProps) => JSX.Element;
  alt: string;
  id: string;
}

const Footer = (props: FooterProps) => {
  const { Logo, alt, id } = props;
  const theme = useTheme();

  return (
    <Box
      id={id}
      className={styles.sectionContainer}
      sx={{ backgroundColor: 'info.main', color: 'info.contrastText', height: '100vh' }}
    >
      <Container maxWidth="lg" sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} pb={10}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                component="a"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={styles.homeLink}
              >
                {Logo({ color: theme.palette.info.contrastText, width: '150px', height: '150px' })}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography component="h3" variant="h3" className={styles.title}>
                  Contáctanos:
                </Typography>
                <Typography component="div" variant="body1" className={styles.content}>
                  <Link href="tel:(123) 456-7890" underline="hover">
                    (123) 456-7890
                  </Link>
                </Typography>
                <Typography component="div" variant="body1">
                  <Link href="mailto:contacto@justiciafamiliararica.cl" underline="hover">
                    contacto@justiciafamiliararica.cl
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ paddingTop: { xs: '40px', sm: '0px' } }}>
                <Typography component="h3" variant="h3" className={styles.title}>
                  Horarios de Atención:
                </Typography>
                <Typography component="div" variant="body1" className={styles.content}>
                  Lunes a Viernes
                </Typography>
                <Typography component="div" variant="body1">
                  9:00 am a 18:00 pm
                </Typography>
                <Typography component="div" variant="body1" className={styles.content}>
                  Sábado
                </Typography>
                <Typography component="div" variant="body1">
                  9:00 am a 13:00 pm
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
