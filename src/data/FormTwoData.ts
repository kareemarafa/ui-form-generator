import {Metadata} from "../interfaces";
import {GenericFormType} from "../interfaces/GenericFormType";
import productImage from '../assets/markus-office-chair-vissle-dark.jpg';
import {DateFormatter} from "../helpers/date-formatter";
import Validators from "../helpers/validators";

export interface FormTwoType extends GenericFormType {
  [index: string]: any;
  image: any;
  name: string;
  material: number;
  guarantee: number;
  productionDate: string;
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
      label: 'Name',
      validators: [Validators.isNotEmpty, Validators.maxLength, Validators.minLength]
    },
    {
      id: 'image',
      type: 'file',
      label: 'Image'
    },
    {
      id: 'guarantee',
      type: 'number',
      label: 'Guarantee',
      validators: [Validators.isNotEmpty]
    },
    {
      id: 'productionDate',
      type: 'date',
      label: 'Production Date',
      validators: [Validators.isNotEmpty]
    },
    {
      id: 'material',
      type: 'select',
      label: 'Material',
      options: [{id: 1, name: 'Leather'}, {id: 2, name: 'Polyester'}]
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
  material: 2,
  guarantee: 10,
  productionDate: DateFormatter(new Date()),
  description: "Adjust the height and angle of this chair so your workday feels comfortable – the mesh backrest lets air through so you keep cool even when the workload rises. Built to outlast years of ups and downs"
}
const FormTwoData = {metadata, data}
export default FormTwoData;
