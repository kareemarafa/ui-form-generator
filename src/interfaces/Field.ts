import {HTMLProps} from "react";

export interface Field<T> extends HTMLProps<T> {
  id: string;
  type: string;
  label: string;
  disabled?: boolean;
  extras?: FieldExtras;
  options?: SelectOption[];
  errors?: string[];
  validators?: any[];
}

export interface SelectOption {
  id: number;
  name: string;
}

export interface FieldExtras {
  controlLabel?: string;
  content?: string;
}

export interface GenericField<T> extends Field<T> {
  defaultValue?: any;
  setFieldValue: (fieldName: string, event: number) => void;
}
