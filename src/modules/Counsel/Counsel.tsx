import { Box, Container, Grid, Typography } from '@mui/material';

import { SectionType } from '@utils/constants';

import styles from './Counsel.module.css';

interface CounselProps extends SectionType {
  image: string;
  alt: string;
}

export const Counsel = (props: CounselProps) => {
  const { title, text, image, alt } = props;

  return (
    <Box className={styles.sectionContainer} sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} mb={4}>
            <picture style={{ width: '100%' }}>
              <source srcSet={image} media="(max-width: 899px)" height="200px" />
              <source srcSet={image} media="(min-width: 900px)" height="350px" />
              <img src={image} alt={alt} style={{ objectFit: 'cover', display: 'block', width: '100%' }} />
            </picture>
          </Grid>
          <Grid item xs={12} md={6} className={styles.titleContainer}>
            <Typography component="h3" variant="h3" className={styles.title}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="div" variant="body1" className={styles.content}>
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
