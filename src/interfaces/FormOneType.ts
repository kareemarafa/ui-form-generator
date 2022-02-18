import {GenericFormType} from "./GenericFormType";

export interface FormOneType extends GenericFormType {
  [index: string]: any;
  name: string;
  age: number;
  comment: string;
}
