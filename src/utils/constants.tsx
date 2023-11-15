type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

type Either<T, U> = Only<T, U> | Only<U, T>;

export interface NavigationType {
  title: string;
  url: string;
  hash: string;
  id: string;
}

export interface SectionType {
  title: string;
  text: string | JSX.Element;
  button?: Record<string, string>;
}

export interface ImageContentType {
  image: string;
  alt: string;
}

export interface CardContentType {
  title: string;
  text: JSX.Element;
  bgColor: string;
  color: string;
}

export interface ServicesListType {
  id: string;
  content: Either<ImageContentType, CardContentType>;
}

export interface ServicesType {
  title: string;
  services: ServicesListType[];
}

export const navSections: NavigationType[] = [
  { title: 'Servicios', url: '/', hash: 'servicios', id: 'servicios' },
  { title: 'Contáctanos', url: '/', hash: 'contacto', id: 'contacto' },
];

export const heroSection: SectionType = {
  title: 'Resolvemos tus problemas con los mejores profesionales',
  text: 'Representación, asesoría y acompañamiento en todo tipo de procesos judiciales.',
};

export const supportSection: SectionType = {
  title: 'Te apoyamos en cada paso.',
  text: (
    <>
      Sabemos lo difícil y complejo que puede ser cada situación.
      <br />
      Te escuchamos y asesoramos de la mejor manera posible.
      <br />
      Con tu confianza y nuestra extensa experiencia podemos lograr los mejores resultados.
      <br />
      Nos especializamos en acompañar en cada paso del proceso.
    </>
  ),
  button: {
    text: 'contáctanos',
    url: '/',
    hash: 'contacto',
  },
};

export const servicesList: ServicesListType[] = [
  {
    id: 'pension-alimentos',
    content: {
      title: 'Pensión de Alimentos',
      text: (
        <ul>
          <li>Solicitud.</li>
          <li>Reajuste (aumento y rebaja).</li>
          <li>Cese.</li>
          <li>Cumplimiento de deuda de alimentos.</li>
        </ul>
      ),
      bgColor: '#003C64',
      color: '#ffffff',
    },
  },
  {
    id: 'cuidad-personal',
    content: {
      title: 'Cuidado Personal',
      text: (
        <ul>
          <li>Acuerdos y cuidado compartido.</li>
          <li>Cuidado por terceros.</li>
          <li>Entrega inmediata.</li>
          <li>Derecho de niños, niñas y adolescentes a ser oídos.</li>
        </ul>
      ),
      bgColor: '#E3DFD6',
      color: '#323232',
    },
  },
  {
    id: 'mediacion-familiar',
    content: {
      title: 'Mediación Familiar',
      text: (
        <ul>
          <li>Placeholder</li>
        </ul>
      ),
      bgColor: '#ffffff',
      color: '#323232',
    },
  },
  {
    id: 'imagen-servicios',
    content: {
      alt: 'pareja tomada de la mano',
      image: 'services.webp',
    },
  },
];

export const servicesSection: ServicesType = {
  title: 'Nuestro enfoque:',
  services: servicesList,
};
