import {HTMLProps} from "react";

export interface Field<T> extends HTMLProps<T> {
  id: string;
  type: string;
  label: string;
  disabled?: boolean;
}
