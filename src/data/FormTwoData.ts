import {Metadata} from "../interfaces";
import {GenericFormType} from "../interfaces/GenericFormType";
import productImage from '../assets/markus-office-chair-vissle-dark.jpg';

export interface FormTwoType extends GenericFormType {
  [index: string]: any;

  name: string;
  guarantee: number;
  description: string;
}

/**
 * Dummy data
 */
const metadata: Metadata = {
  fields: [
    {
      id: 'name',
      type: 'text',
      label: 'Name'
    },
    {
      id: 'image',
      type: 'file',
      label: 'Image'
    },
    {
      id: 'guarantee',
      type: 'number',
      label: 'Guarantee'
    },
    {
      id: 'description',
      type: 'textarea',
      label: 'Description',
      rows: 4
    }
  ]
}

/**
 * Dummy data
 */
const data: FormTwoType = {
  image: productImage,
  name: "MARKUS",
  guarantee: 10,
  description: "Adjust the height and angle of this chair so your workday feels comfortable – the mesh backrest lets air through so you keep cool even when the workload rises. Built to outlast years of ups and downs"
}

export default {metadata, data};