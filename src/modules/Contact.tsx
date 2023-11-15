import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

// import wave1 from '@assets/images/wave1.svg';
// import wave2 from '@assets/images/wave2.svg';
// import wave3 from '@assets/images/wave3.svg';
import footerLogo from '@assets/icons/footerLogo2.png';

const Contact = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
  });

  useEffect(() => {
    const footer = document.getElementById('footer');
    function handleResize() {
      setWindowSize({
        height: footer?.offsetHeight || 0,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.style.backgroundPositionY = `${windowSize.height * 0.5}px`;
    }
  }, [windowSize]);

  return (
    <Box
      id="footer"
      sx={{
        // backgroundImage: `url(${wave2.src}), url(${wave3.src}), url(${wave1.src})`,
        backgroundSize: 'cover',
        marginTop: '20px',
        width: '100%',
        color: 'secondary.main',
        backgroundRepeatY: 'no-repeat',
      }}
    >
      <Container maxWidth="xl" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Grid container justifyContent="center" rowGap={2}>
          <Grid item xs={4} md={2} lg={2}>
            {/* <Image alt="logo sudent" src={footerLogo} layout="responsive" width="105px" height="103px" /> */}
          </Grid>
          <Grid item xs={12} md="auto" lg={1}></Grid>
          <Grid item xs={12} md={5} lg={5} display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" flexDirection="row" alignItems="center">
              {/* <LocationOnIcon fontSize="large" color="error" /> */}
              <Typography
                sx={{ fontWeight: 700, marginLeft: '10px' }}
                component="a"
                href="https://goo.gl/maps/kaZemArB3RFsf5SS7"
              >
                AV. LOS PAJARITOS 3195 OFICINA 505 MAIPU
                <br />
                METRO SANTIAGO BUERAS
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              {/* <WhatsAppIcon fontSize="large" sx={{ color: '#0DC143' }} /> */}
              <Typography sx={{ fontWeight: 700, marginLeft: '10px' }} component="a" href="https://n9.cl/tm0ht">
                +569 3181 1912
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              {/* <ScheduleIcon fontSize="large" /> */}
              <Typography sx={{ fontWeight: 700, marginLeft: '10px' }}>
                MARTES A DOMINGO DE 8:30 A 21:30 HRS.
                <br />
                ATENCIÓN CON HORA RESERVADA
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} lg={4} display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" flexDirection="row" alignItems="center" sx={{ marginBottom: '15px' }}>
              {/* <EmailIcon fontSize="large" /> */}
              <Typography sx={{ fontWeight: 700, marginLeft: '10px' }}>
                <Link href={`mailto:contacto@sudentclinic.cl`} color="inherit">
                  contacto@sudentclinic.cl
                </Link>
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box
                sx={{ backgroundColor: 'primary.main', padding: '5px' }}
                display="flex"
                flexDirection="row"
                justifyContent="center"
              >
                <Typography
                  component="a"
                  href="https://www.instagram.com/sudent_urgenciadental/"
                  color="primary.contrastText"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                >
                  {/* <InstagramIcon sx={{ fontSize: '40px' }} /> */}
                </Typography>
              </Box>
              <Box
                sx={{ backgroundColor: '#0DC143', padding: '5px', margin: '0 10px' }}
                display="flex"
                flexDirection="row"
                justifyContent="center"
              >
                <Typography
                  component="a"
                  href="https://n9.cl/tm0ht"
                  color="primary.contrastText"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                >
                  {/* <WhatsAppIcon sx={{ fontSize: '40px' }} /> */}
                </Typography>
              </Box>
              <Box
                sx={{ backgroundColor: 'primary.main', padding: '5px' }}
                display="flex"
                flexDirection="row"
                justifyContent="center"
              >
                <Typography
                  component="a"
                  href="https://goo.gl/maps/kaZemArB3RFsf5SS7"
                  color="primary.contrastText"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                >
                  {/* <LocationOnIcon sx={{ fontSize: '40px' }} /> */}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
