import {FormEvent, HTMLProps} from "react";

export interface Field<T> extends HTMLProps<T> {
  id: string;
  type: string;
  label: string;
  disabled?: boolean;
  options?: SelectOption[]
}

export interface SelectOption {
  id: number;
  name: string;
}

export interface GenericField<T> extends Field<T> {
  initValue?: any;
  setFieldValue: (fieldName: string, event: FormEvent) => void;
}
