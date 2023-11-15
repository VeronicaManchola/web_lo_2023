import React, { Fragment } from 'react';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

interface HeroProps {
  image: string;
  mobileImage: string;
  alt?: string;
  children?: React.ReactNode;
  classes?: any;
}

const Hero = (props: HeroProps) => {
  const { image, mobileImage, alt, children, classes } = props;

  return (
    <Fragment>
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Grid container className={classes.leftContainer}>
          <Grid item xs={12} md={8} lg={7} display="flex" alignItems="center" order={{ xs: 2, md: 1 }}>
            {children}
          </Grid>
          <Grid item xs={12} md={4} lg={5} display="flex" order={{ xs: 1, md: 2 }}>
            <picture style={{ width: '100%' }}>
              <source srcSet={mobileImage} media="(max-width: 899px)" height="400px" />
              <source srcSet={image} media="(min-width: 900px)" height="780px" />
              <img
                src={image}
                alt={alt}
                style={{ objectFit: 'cover', display: 'block', width: '100%', objectPosition: '15%' }}
              />
            </picture>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Hero;
