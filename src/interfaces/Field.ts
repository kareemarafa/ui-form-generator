import {FormEvent, HTMLProps} from "react";

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
  content?: string;
}

export interface GenericField<T> extends Field<T> {
  defaultValue?: any;
  setFieldValue: (fieldName: string, event: FormEvent) => void;
}
