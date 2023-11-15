import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface DetailCardProps {
  title: string;
  text: JSX.Element;
  image?: string;
  secondaryText?: JSX.Element;
  preImage?: JSX.Element;
}

const DetailCard = (props: DetailCardProps) => {
  const { title, text, image = '', secondaryText, preImage } = props;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Box
          sx={{
            marginBottom: '30px',
            padding: '15px 5px',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            textAlign: 'center',
          }}
        >
          <Typography component="h4" variant="h4">
            {title}
          </Typography>
        </Box>
      </Grid>
      {preImage ?? (
        <Grid item xs={12}>
          <Box display="flex" justifyContent="left" alignItems="center">
            <Typography component="div" variant="body1">
              {preImage}
            </Typography>
          </Box>
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="left" alignItems="center" sx={{ paddingRight: '1rem' }}>
          <Typography component="div" variant="body1">
            {text}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {image !== '' ? <Image src={image} layout="responsive" width="300px" height="188px" alt={title} /> : <></>}
      </Grid>
      {secondaryText ?? (
        <Grid item xs={12}>
          <Box display="flex" justifyContent="left" alignItems="center">
            <Typography component="div" variant="body1">
              {secondaryText}
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default DetailCard;
