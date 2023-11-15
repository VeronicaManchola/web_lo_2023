import * as React from 'react';

import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import DetailCard from '@modules/DetailCard';
import styles from '@modules/Services/Services.module.css';
import { ServicesType } from '@utils/constants';

interface SupportProps extends ServicesType {}

const Services = (props: SupportProps) => {
  const { title, services } = props;

  return (
    <Container
      maxWidth="xl"
      className={styles.sectionContainer}
      sx={{ backgroundColor: 'info.main', color: 'info.contrastText' }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={2} className={styles.leftContainer}>
          <Typography component="h3" variant="h3" className={styles.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} className={styles.rightContainer}>
          <Grid container>
            {services.map((service) => {
              const card = service.content;
              if (card.title && card.text) {
                return (
                  <Grid key={service.id} item xs={12} md={6} p={2}>
                    <DetailCard title={card.title} text={card.text} bgColor={card.bgColor} color={card.color} />
                  </Grid>
                );
              }

              let image;

              if (card.image) {
                const {
                  default: { src },
                } = require(`@assets/images/${card.image}`);
                image = src;
              }

              return (
                <Grid key={service.id} item xs={12} md={6} p={2}>
                  <picture style={{ width: '100%' }}>
                    <img
                      src={image}
                      alt={card.alt}
                      height="340px"
                      style={{ objectFit: 'cover', display: 'block', width: '100%' }}
                    />
                  </picture>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
