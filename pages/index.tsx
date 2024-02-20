import { Fragment } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import counsel from '@assets/images/counsel.webp';
import hero from '@assets/images/hero.webp';
import heroMobile from '@assets/images/hero.webp';
import support from '@assets/images/support.webp';
import supportMobile from '@assets/images/support.webp';
import { Counsel } from '@modules/Counsel/Counsel';
import Hero from '@modules/Hero/Hero';
import Services from '@modules/Services/Services';
import Support from '@modules/Support/Support';
import { counselSection, heroSection, servicesSection, supportSection } from '@utils/constants';

const Home: NextPage = () => {
  const {
    default: { src: ogImg },
  } = require(`@assets/images/Logo.png`);

  return (
    <Fragment>
      <Head>
        <title>Justicia Familiar Arica - Inicio</title>
        <meta
          name="description"
          content="Justicia Familiar Arica - Asesoría legal - Mediación familiar. Especialista en derecho de familia y mediadora privada registrada."
        />
        <meta name="keywords" content="abogada, arica, legal, familia, juicio, mediacion" />
        <meta property="og:title" content="Justicia Familiar Arica" />
        <meta
          property="og:description"
          content="Justicia Familiar Arica - Asesoría legal - Mediación familiar. Especialista en derecho de familia y mediadora privada registrada."
        />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:alt" content="Logo Justicia Familiar Arica" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justiciafamiliararica.cl/" />
      </Head>
      <Hero
        image={hero.src}
        mobileImage={heroMobile.src}
        alt="justicia"
        title={heroSection.title}
        text={heroSection.text}
      />
      <Support
        title={supportSection.title}
        text={supportSection.text}
        image={support.src}
        mobileImage={supportMobile.src}
        alt="balanza"
        button={supportSection.button}
      />
      <Services id="servicios" title={servicesSection.title} services={servicesSection.services} />
      <Counsel title={counselSection.title} text={counselSection.text} image={counsel.src} alt="libros" />
    </Fragment>
  );
};

export default Home;
