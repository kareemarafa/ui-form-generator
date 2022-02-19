import {Metadata} from "../interfaces";
import {GenericFormType} from "../interfaces/GenericFormType";
import cameraImage from '../assets/cannon-5d-markIV.jpeg';
import Validators from "../helpers/validators";

export interface FormThreeType extends GenericFormType {
  [index: string]: any;

  image: string;
  title: string;
  category: number;
  condition: string;
  price: number;
  description: string;
  termsAndConditions: number;
}

/**
 * Dummy data
 */
const metadata: Metadata = {
  fields: [
    {
      id: 'image',
      type: 'file',
      label: "Image",
      disabled: true
    },
    {
      id: 'title',
      type: 'text',
      label: 'Title',
      validators: [Validators.isNotEmpty]
    },
    {
      id: 'category',
      type: 'select',
      label: 'Category',
      options: [{id: 1, name: 'Electronics'}, {id: 2, name: 'Furniture'}, {id: 3, name: 'Appliances'}]
    },
    {
      id: 'condition',
      type: 'radio',
      label: 'Condition',
      options: [{id: 1, name: 'New'}, {id: 2, name: 'Refurbished'}, {id: 3, name: 'Used'}]
    },
    {
      id: 'price',
      type: 'number',
      label: 'Price',
      validators: [Validators.isNotEmpty]
    },
    {
      id: 'description',
      type: 'textarea',
      label: 'Description',
      rows: 5,
      validators: [Validators.isNotEmpty]
    },
    {
      id: 'termsAndConditions',
      type: 'checkbox',
      label: 'Terms and Conditions',
      extras: {
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. en book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      options: [
        {
          id: 1,
          name: 'Agree to terms and conditions',
        }
      ]
    }
  ]
}

/**
 * Dummy data
 */
const data: FormThreeType = {
  image: cameraImage,
  title: 'Cannon 5D Mark IV DSLR professional Camera',
  category: 1,
  condition: 'Refurbished',
  price: 1049,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. en book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  termsAndConditions: 0,
}

export default {metadata, data};
