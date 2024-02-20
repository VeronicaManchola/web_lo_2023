import * as React from 'react';

import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import DetailCard from '@modules/DetailCard/DetailCard';
import { Service, ServicesListType, ServicesType } from '@utils/constants';

import styles from './Services.module.css';

interface SupportProps extends ServicesType {
  id: string;
}

const renderCard = (service: ServicesListType) => {
  const {
    content: { title = '', text = <></>, bgColor = '', color = '', image = '', alt = '' },
  } = service;

  switch (service.type) {
    case Service.TEXT:
      return (
        <Grid key={service.id} item xs={12} sm={6} p={2}>
          <DetailCard title={title} text={text} bgColor={bgColor} color={color} />
        </Grid>
      );
    case Service.IMAGE: {
      const {
        default: { src: cardImage },
      } = require(`@assets/images/${image}`);

      return (
        <Grid key={service.id} item xs={12} sm={6} p={2}>
          <picture style={{ width: '100%' }}>
            <source srcSet={cardImage} media="(max-width: 599px)" height="250px" />
            <source srcSet={cardImage} media="(max-width: 899px)" style={{ minHeight: '250px' }} />
            <source srcSet={cardImage} media="(min-width: 900px)" style={{ minHeight: '340px' }} />
            <img
              src={cardImage}
              alt={alt}
              height="100%"
              style={{ objectFit: 'cover', display: 'block', width: '100%', objectPosition: '30% 30%' }}
            />
          </picture>
        </Grid>
      );
    }
    default:
      break;
  }
};

const Services = (props: SupportProps) => {
  const { id, title, services } = props;

  return (
    <Box
      id={id}
      className={styles.sectionContainer}
      sx={{ backgroundColor: 'info.main', color: 'info.contrastText', height: '100vh' }}
    >
      <Container maxWidth="xl" sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={2} className={styles.leftContainer}>
            <Typography component="h3" variant="h3" className={styles.title}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} lg={8} xl={7} className={styles.rightContainer}>
            <Grid container>{services.map((service) => renderCard(service))}</Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
