
export interface ColorVariable {
  property: string;
  name: string;
  value?: string;
  valueRgb?: string;
  contrast?: string;
  contrastRgb?: string;
  tint?: string;
  shade?: string;
}

export const COLOR_VARS: ColorVariable[] = [
  {
    name: 'Primary',
    property: '--sen-color-primary'
  },
  {
    name: 'Secondary',
    property: '--sen-color-secondary'
  },
  {
    name: 'Tertiary',
    property: '--sen-color-tertiary'
  },
  {
    name: 'Success',
    property: '--sen-color-success'
  },
  {
    name: 'Warning',
    property: '--sen-color-warning'
  },
  {
    name: 'Danger',
    property: '--sen-color-danger'
  },
  {
    name: 'Dark',
    property: '--sen-color-dark'
  },
  {
    name: 'Medium',
    property: '--sen-color-medium'
  },
  {
    name: 'Light',
    property: '--sen-color-light'
  }
];
