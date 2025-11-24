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

export enum Service {
  TEXT = 'text',
  IMAGE = 'image',
}

export interface ServicesListType {
  id: string;
  content: Either<ImageContentType, CardContentType>;
  type: Service;
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
  title: '¿Necesita demandar o está siendo demandado?',
  text: (
    <> Representación y asesoría especializada en todo el proceso judicial.
    <br />
    <br /> Somos profesionales con amplia experiencia.</>
  ),
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
      {/* <span style={{ marginTop: '50px' }}>Por esto es que la primera consulta es gratuita.</span> */}
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
          <li>Solicitud de alimentos.</li>
          <li>Reajuste, aumento y rebaja de alimentos.</li>
          <li>Cese de los alimentos.</li>
          <li>Cumplimiento de deuda de alimentos.</li>
        </ul>
      ),
      bgColor: '#003C64',
      color: '#ffffff',
    },
    type: Service.TEXT,
  },
  {
    id: 'cuidad-personal',
    content: {
      title: 'Litigacion en Familia',
      text: (
        <ul>
          {/* <li>Pensión de alimentos aumento, rebaja y cese de los alimentos.</li> */}
          <li>Cuidado Personal y modificaciones.</li>
          <li>Divorcio.</li>
          <li>Salida del país.</li>
          <li>Mediación Familiar, mediadora certificada y registrada en el Ministerio de Justicia</li>
        </ul>
      ),
      bgColor: '#E3DFD6',
      color: '#323232',
    },
    type: Service.TEXT,
  },
  {
    id: 'mediacion-familiar',
    content: {
      title: 'Materia Civil',
      text: (
        <ul>
          <li>Contrato de Arriendo.</li>
          <li>Cambio de nombre.</li>
          <li>Interdiccion.</li>
          <li>Precario.</li>
          <li>Indemnización de perjuicios.</li>
          <li>Policía Local.</li>
        </ul>
      ),
      bgColor: '#D9D9D9',
      color: '#323232',
    },
    type: Service.TEXT,
  },
  {
    id: 'imagen-servicios',
    content: {
      alt: 'pareja tomada de la mano',
      image: 'services.webp',
    },
    type: Service.IMAGE,
  },
];

export const servicesSection: ServicesType = {
  title: 'Áreas de práctica:',
  services: servicesList,
};

export const counselSection: SectionType = {
  // title: 'Asesoramos y resolvemos en diferentes áreas:',
  title: 'Asesoramos y resolvemos en diferentes áreas.',
  text: (
    <> Nuestro objetivo es realizar el análisis completo y personalizado para resolver el conflicto en material Civil.
     <ul>
       <li>Autorización de salida del país.</li>
       <li>Alimentos.</li>
       <li>Divorcio.</li>
       <li>Relación directa y regular (visitas).</li>
       <li>Declaración de bien familiar.</li>
       <li>Y otros temas como: Cambio de nombre, término de contrato de arriendo, etc.</li>
     </ul>
     </>
  ),
};
