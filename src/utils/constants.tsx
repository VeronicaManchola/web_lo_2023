export interface NavigationType {
  title: string;
  url: string;
  hash: string;
  id: string;
}

export interface ServicesType {
  id: string;
  title: string;
  text: JSX.Element;
}

export const navSections: NavigationType[] = [
  { title: 'Servicios', url: '/', hash: 'servicios', id: 'servicios' },
  { title: 'Contáctanos', url: '/', hash: 'contacto', id: 'contacto' },
];

export const servicesSections: ServicesType[] = [
  {
    id: 'pension-alimentos',
    title: 'Pensión de Alimentos',
    text: (
      <ul>
        <li>Solicitud.</li>
        <li>Reajuste (aumento y rebaja).</li>
        <li>Cese.</li>
        <li>Cumplimiento de deuda de alimentos.</li>
      </ul>
    ),
  },
  {
    id: 'cuidad-personal',
    title: 'Cuidado Personal',
    text: (
      <ul>
        <li>Acuerdos y cuidado compartido.</li>
        <li>Cuidado por terceros.</li>
        <li>Entrega inmediata.</li>
        <li>Derecho de niños, niñas y adolescentes a ser oídos.</li>
      </ul>
    ),
  },
  {
    id: 'mediacion-familiar',
    title: 'Mediación Familiar',
    text: (
      <ul>
        <li>Placeholder</li>
      </ul>
    ),
  },
];