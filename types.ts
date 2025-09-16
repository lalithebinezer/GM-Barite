export type Page = 'home' | 'products' | 'about' | 'contact' | 'quality' | 'applications' | 'resources';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  grade: string;
  specificGravity: string;
  particleSize: string;
  chemicalPurity: string[];
  applications: string[];
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    imageUrl: string;
    documentUrl: string;
}