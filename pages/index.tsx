import type { NextPage } from 'next';
import { Fragment } from 'react';
import Hero from '@modules/Hero';
import Services from '@modules/Services';
import Contact from '@modules/Contact';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import hero from '@assets/images/hero.webp';
import heroMobile from '@assets/images/hero.webp';
import Head from 'next/head';
import { Container } from '@mui/material';

const Home: NextPage = () => {
  // const {
  //   default: { src: ogImg },
  // } = require(`@assets/images/og_img.webp`);

  return (
    <Fragment>
      <Head>
        <title>Placeholder - Inicio</title>
        <meta name="description" content="Placeholder" />
        <meta name="keywords" content="abogada, arica" />
        <meta property="og:title" content="Placeholder" />
        <meta property="og:description" content="Placeholder" />
        {/* <meta property="og:image" content={ogImg} /> */}
        <meta property="og:image:alt" content="Logo Placeholder" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="Url Placeholder" />
      </Head>
      <Hero image={hero.src} mobileImage={heroMobile.src} alt="justicia">
        <Container>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            sx={{
              marginTop: '20px',
              marginBottom: '57px',
              ['@media (max-width:599.95px)']: {
                marginBottom: '27px',
              },
            }}
          >
            <Typography key="heroTitle" component="h1" variant="h2" textAlign="left" fontFamily="EB Garamond, serif">
              Resolvemos tus problemas con los mejores profesionales
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} ml="auto">
            <Typography
              key="heroIntro"
              component="h2"
              variant="h5"
              textAlign="left"
              fontFamily="Open Sauce One, sans-serif"
            >
              Representación, asesoría y acompañamiento en todo tipo de procesos judiciales.
            </Typography>
          </Grid>
        </Container>
      </Hero>
      {/* <Hero
        image={schedule.src}
        mobileImage={scheduleMobile.src}
        description="horario consultorio"
        href="https://n9.cl/tm0ht"
      >
        
      </Hero> */}
      {/* <Services sections={areasSections} id="especialidades" /> */}
    </Fragment>
  );
};

export default Home;
