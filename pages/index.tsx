import { Fragment } from 'react';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Head from 'next/head';

import hero from '@assets/images/hero.webp';
import heroMobile from '@assets/images/hero.webp';
import services from '@assets/images/services.webp';
import support from '@assets/images/support.webp';
import supportMobile from '@assets/images/support.webp';
import Hero from '@modules/Hero/Hero';
import styles from '@modules/Hero/Hero.module.css';
import Services from '@modules/Services/Services';
import Support from '@modules/Support/Support';
import { heroSection, servicesSection, supportSection } from '@utils/constants';

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
      <Hero
        image={hero.src}
        mobileImage={heroMobile.src}
        alt="justicia"
        classes={{ leftContainer: styles.leftContainer }}
      >
        <Container>
          <Grid item xs={12} className={styles.titleContainer}>
            <Typography key="heroTitle" component="h1" variant="h2" className={styles.title}>
              {heroSection.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} ml="auto">
            <Typography key="heroIntro" component="h2" variant="h5" className={styles.subtitle}>
              {heroSection.text}
            </Typography>
          </Grid>
        </Container>
      </Hero>
      <Support
        title={supportSection.title}
        text={supportSection.text}
        image={support.src}
        mobileImage={supportMobile.src}
        alt="balanza"
        button={supportSection.button}
      />
      <Services title={servicesSection.title} services={servicesSection.services} />
    </Fragment>
  );
};

export default Home;
