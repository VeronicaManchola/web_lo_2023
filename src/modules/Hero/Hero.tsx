import React, { Fragment } from 'react';

import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { SectionType } from '@utils/constants';

import styles from './Hero.module.css';
interface HeroProps extends SectionType {
  image: string;
  mobileImage: string;
  alt?: string;
}

const Hero = (props: HeroProps) => {
  const { image, mobileImage, alt, title, text } = props;

  return (
    <Fragment>
      <Box className={styles.sectionContainer} sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Grid container className={styles.leftContainer}>
          <Grid item xs={12} md={8} lg={7} display="flex" alignItems="center" order={{ xs: 2, md: 1 }}>
            <Container>
              <Grid item xs={12} className={styles.titleContainer}>
                <Typography key="heroTitle" component="h1" variant="h2" className={styles.title}>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} ml="auto">
                <Typography key="heroIntro" component="h2" variant="h5" className={styles.subtitle}>
                  {text}
                </Typography>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} md={4} lg={5} display="flex" order={{ xs: 1, md: 2 }} sx={{ height: 'fit-content' }}>
            <picture style={{ width: '100%', height: 'fit-content' }}>
              <source srcSet={mobileImage} media="(max-width: 899px)" height="400px" />
              <source srcSet={image} media="(min-width: 900px)" height="780px" />
              <img className={styles.heroImg} src={image} alt={alt} />
            </picture>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Hero;
