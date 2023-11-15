import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

const Banner = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));

  return (
    <Box
      sx={{
        width: '100%',
        padding: '5px 0',
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <Grid container columns={12}>
          <Grid item xs={12} sm={9} display="flex" justifyContent="center" alignItems="center">
            <Typography textAlign="center" color="secondary.main" sx={{ fontWeight: 700 }}>
              LLAMANOS:{' '}
              <Typography component="a" href="tel:+56931811912" color="primary.main" sx={{ fontWeight: 700 }}>
                +569 31811912
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            display="flex"
            justifyContent={isDesktop ? 'space-between' : 'space-evenly'}
            alignItems="center"
          >
            <Typography component="a" href="https://www.instagram.com/sudent_urgenciadental/" color="primary.main">
              <InstagramIcon />
            </Typography>
            <Typography component="a" href="https://n9.cl/tm0ht" color="primary.main">
              <WhatsAppIcon />
            </Typography>
            <Typography component="a" href="https://goo.gl/maps/kaZemArB3RFsf5SS7" color="primary.main">
              <LocationOnIcon />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
