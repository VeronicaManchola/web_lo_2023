import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface DetailCardProps {
  title: string;
  text: JSX.Element;
  bgColor: string;
  color: string;
}

const DetailCard = (props: DetailCardProps) => {
  const { title, text, bgColor, color } = props;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: bgColor, color: color, height: '340px', padding: '60px' }}
    >
      <Grid item xs={12}>
        <Typography component="h4" variant="h4">
          {title}
        </Typography>
        <Typography component="div" variant="body1">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DetailCard;
