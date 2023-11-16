import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from './DetailCard.module.css';

interface DetailCardProps {
  title: string;
  text: JSX.Element;
  bgColor: string;
  color: string;
}

const DetailCard = (props: DetailCardProps) => {
  const { title, text, bgColor, color } = props;

  return (
    <Grid container className={styles.card} sx={{ backgroundColor: bgColor, color: color }}>
      <Grid item xs={12}>
        <Typography component="h4" variant="h4" className={styles.title}>
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
