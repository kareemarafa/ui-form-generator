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
      validators: [Validators.isNotEmpty, Validators.maxLength, Validators.minLength]
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      validators: [Validators.isNotEmpty, Validators.isEmail]
    },
    {
      id: 'phone',
      type: 'text',
      label: 'Phone number',
      validators: [Validators.isNotEmpty, Validators.isPhoneNumber]
    },
    {
      id: 'age',
      type: 'number',
      label: 'Age',
      validators: [Validators.isNotEmpty, Validators.min, Validators.max]
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
  email: 'bob@example.com',
  phone: '+1234567890',
  comment: "The best developer in the world"
}

export default {metadata, data};
