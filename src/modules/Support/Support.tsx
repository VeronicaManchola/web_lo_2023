import * as React from 'react';

import { Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';

import { SectionType } from '@utils/constants';

import styles from './Support.module.css';

interface SupportProps extends SectionType {
  image: string;
  mobileImage: string;
  alt: string;
}

const Support = (props: SupportProps) => {
  const { title, text, image, mobileImage, alt, button } = props;
  const router = useRouter();

  const handleClick = (target: Record<string, string>) => {
    if (target.hash && target.url === router.pathname) {
      const id = target.hash;
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push({ pathname: target.url, hash: target.hash }, undefined, { scroll: false });
    }
  };

  return (
    <Container maxWidth="xl" className={styles.sectionContainer}>
      <Grid
        container
        justifyContent="center"
        sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%' }}
      >
        <Grid item xs={12} lg={10}>
          <Grid container>
            <Grid item xs={12} md={7} className={styles.leftContainer}>
              <Typography component="h3" variant="h3" className={styles.title}>
                {title}
              </Typography>
              <Typography
                component="p"
                variant="body1"
                textAlign="center"
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                {text}
              </Typography>
              {button && (
                <Button
                  onClick={() => handleClick(button)}
                  color="secondary"
                  variant="contained"
                  className={styles.button}
                >
                  {button.text}
                </Button>
              )}
            </Grid>
            <Grid item xs={12} md={5} lg={4} className={styles.rightContainer}>
              <picture style={{ width: '100%' }}>
                <source srcSet={mobileImage} media="(max-width: 899px)" height="260px" />
                <source srcSet={image} media="(min-width: 900px)" height="615x" />
                <img
                  src={image}
                  alt={alt}
                  style={{ objectFit: 'cover', display: 'block', width: '100%', objectPosition: '0% 70%' }}
                />
              </picture>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Support;
