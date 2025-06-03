import imgC1 from '../assets/Certificado Django.jpg';
import imgC2 from '../assets/Certificado-React-TypeScript.jpg';
import imgC3 from '../assets/Certificado Python.jpg';
import imgC4 from '../assets/Certificado Delfin.jpg';
import imgC5 from '../assets/Certificado-Java.jpg';
import imgC6 from '../assets/Certificado CSS.jpg';


export interface Certificate {
  id: number;
  images: string[];
}

export const certificates: Certificate[] = [
  {
    id: 1,
    images: [imgC1]
  },
  {
    id: 2,
    images: [imgC2]
  },
  {
    id: 3,
    images: [imgC3]
  },
  {
    id: 4,
    images: [imgC4]
  },
  {
    id: 5,
    images: [imgC5]
  },
  {
    id: 6,
    images: [imgC6]
  }
];
