import { Company } from "./model";

export const COMPANIES: Company[] = [
  { value: 'gsk-0', viewValue: 'GSK' },
  { value: 'pec-1', viewValue: 'PEC' },
  { value: 'onyo-2', viewValue: 'ONYO' },
  { value: 'jacobs-3', viewValue: 'Jacobs' },
  { value: 'zenith-4', viewValue: 'Zenith' },
  { value: 'Okura-5', viewValue: 'Okura' },
  { value: 'Others-6', viewValue: 'Others' },
];

export const OPTIONS: string[] = [
  'GSK',
  'PEC',
  'ONYO',
  'Jacob',
  'Zenith',
  'Okura',
  'ISS'
];

export const LOCATIONS: string[] = [
  'Production',
  'Solvent Recovery',
  'Warehouse',
  'Cafeteria',
  'Gents',
  'Ladies'
];
