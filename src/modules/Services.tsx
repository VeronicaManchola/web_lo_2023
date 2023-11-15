import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { areasDescription } from '@utils/constants';
import DetailCard from './DetailCard';

interface Section {
  id: string;
  image: string;
  title: string;
  target?: string;
  text?: string;
}

interface ServicesProps {
  id: string;
  sections: Section[];
}

const Services = (props: ServicesProps) => {
  const { id, sections } = props;
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    id: '',
    title: '',
    image: '',
    text: <></>,
  });

  const handleChange = (newId: string) => {
    if (newId === selectedCard.id || selectedCard.id === '') setChecked((prev) => !prev);
  };

  var settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container id={id}>
      <Slider {...settings}>
        {sections?.map((section) => {
          const {
            default: { src },
          } = require(`@assets/icons/${section.image}`);

          return (
            <Box
              key={section.id}
              sx={{
                height: '220px',
                borderColor: 'rgba(65, 92, 101, 0.7)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '5px',
              }}
            >
              <CardActionArea
                sx={{ height: '100%', paddingTop: '16px', display: 'flex', flexDirection: 'column' }}
                onClick={() => {
                  if (section.target) {
                    router.push({ pathname: section.target, hash: 'urgenciasDetail' }, undefined, {
                      scroll: false,
                    });
                  } else {
                    handleChange(section.id);

                    const {
                      default: { src: cardSrc },
                    } = require(`@assets/images/${areasDescription[section.id].image}`);

                    setSelectedCard({
                      id: section.id,
                      title: section.title,
                      image: cardSrc,
                      text: areasDescription[section.id].text,
                    });

                    setTimeout(() => {
                      const element = document.getElementById('collapseText');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }, 200);
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={src}
                  alt={section.title}
                  sx={{
                    height: '100px',
                    width: 'auto',
                    margin: '0 auto',
                  }}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: 'secondary.main' }}>
                    {section.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          );
        })}
      </Slider>

      <Collapse id="collapseText" sx={{ marginTop: '30px' }} in={checked}>
        <DetailCard title={selectedCard.title} text={selectedCard.text} image={selectedCard.image} />
      </Collapse>
    </Container>
  );
};

export default Services;
