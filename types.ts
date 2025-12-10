export interface MenuItem {
  id: string;
  label: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  pms: string;
  cmyk: string;
  rgb: string;
  folie: string;
  ral: string;
  textColor?: string;
}