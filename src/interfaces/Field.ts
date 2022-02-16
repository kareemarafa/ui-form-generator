export interface Field {
  id: string;
  type: string;
  label: string;
  disabled?: boolean;
  value?: any;
  OnChange?: (a: any) => void;
}
