import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import styles from './Footer.module.css';

interface FooterProps {
  logo: string;
  alt: string;
  id: string;
}

const Footer = (props: FooterProps) => {
  const { logo, alt, id } = props;

  return (
    <Box id={id} className={styles.sectionContainer} sx={{ backgroundColor: 'info.main', color: 'info.contrastText' }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item xs={12} pb={8}>
            <Box width={220} sx={{ height: '57px' }}>
              <Typography
                component="a"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={styles.homeLink}
              >
                <Image
                  src={logo}
                  width="214"
                  height="57"
                  alt={alt}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
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
                  <Link href="mailto:hello@reallygreatsite.com" underline="hover">
                    hello@reallygreatsite.com
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
