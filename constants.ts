import { MenuItem, ColorSwatch } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'introduksjon', label: 'Introduksjon' },
  { id: 'logomerket', label: 'Logomerket' },
  { id: 'navnetrekket', label: 'Navnetrekket' },
  { id: 'typografi', label: 'Typografi' },
  { id: 'font-miksing', label: 'Font-miksing' },
  { id: 'farger', label: 'Farger' },
  { id: 'bildebruk', label: 'Bildebruk' },
  { id: 'sosiale-medier', label: 'Sosiale Medier' },
  { id: 'malverk', label: 'Malverk' },
  { id: 'last-ned', label: 'Last ned' },
];

export const BRAND_COLORS: ColorSwatch[] = [
  { 
    name: 'Vidde Main Blue', 
    hex: '#0F161A', 
    pms: 'Black 6 C', 
    cmyk: '80 60 50 80', 
    rgb: '15 22 26',
    folie: 'Avery 900 Super Black',
    ral: '9005 Jet Black',
    textColor: 'white' 
  },
  { 
    name: 'Vidde Blue Secondary', 
    hex: '#6E7881', 
    pms: '7544 C', 
    cmyk: '40 20 20 40', 
    rgb: '103 122 126',
    folie: 'Avery 800 Storm Grey',
    ral: '7031 Blue Grey',
    textColor: 'white' 
  },
  { 
    name: 'Vidde Light', 
    hex: '#F3FBFC', 
    pms: '656 C', 
    cmyk: '2 0 0 2', 
    rgb: '243 251 252',
    folie: 'Avery 700 White',
    ral: '9010 Pure White',
    textColor: 'black' 
  },
  { 
    name: 'Vidde Gold', 
    hex: '#C69865', 
    pms: '7503 C', 
    cmyk: '20 40 70 0', 
    rgb: '198 152 101',
    folie: 'Avery 900 Gold',
    ral: '1024 Ochre Yellow',
    textColor: 'black' 
  },
  { 
    name: 'Vidde Brown', 
    hex: '#302418', 
    pms: '476 C', 
    cmyk: '60 70 80 70', 
    rgb: '42 33 25',
    folie: 'Avery 800 Brown',
    ral: '8019 Grey Brown',
    textColor: 'white' 
  },
  { 
    name: 'Vidde Beige', 
    hex: '#F3EBE1', 
    pms: '7500 C', 
    cmyk: '5 5 10 0', 
    rgb: '243 235 225',
    folie: 'Avery 700 Cream',
    ral: '1013 Oyster White',
    textColor: 'black' 
  },
];