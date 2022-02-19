import {Metadata} from "../interfaces";
import {GenericFormType} from "../interfaces/GenericFormType";
import Validators from "../helpers/validators";

export interface FormOneType extends GenericFormType {
  [index: string]: any;
  name: string;
  age: number;
  comment: string;
}

/**
 * Dummy data
 */
const metadata: Metadata = {
  fields: [
    {
      id: 'name',
      type: 'text',
      label: 'Name',
      validators: [Validators.isNotEmpty]
    },
    {
      id: 'age',
      type: 'number',
      label: 'Age',
      validators: [Validators.min, Validators.max]
    },
    {
      id: 'comment',
      type: 'textarea',
      label: 'Comment',
      disabled: true
    }
  ]
}

/**
 * Dummy data
 */
const data: FormOneType = {
  name: "Bob",
  age: 42,
  comment: "The best developer in the world"
}

export default {metadata, data};
