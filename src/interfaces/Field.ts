import {FormEvent, HTMLProps} from "react";

export interface Field<T> extends HTMLProps<T> {
  id: string;
  type: string;
  label: string;
  disabled?: boolean;
  extras?: FieldExtras;
  options?: SelectOption[]
}

export interface SelectOption {
  id: number;
  name: string;
}

export interface FieldExtras {
  content?: string;
}

export interface GenericField<T> extends Field<T> {
  initValue?: any;
  setFieldValue: (fieldName: string, event: FormEvent) => void;
}
