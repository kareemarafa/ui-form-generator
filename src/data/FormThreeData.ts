import {Metadata} from "../interfaces";
import {GenericFormType} from "../interfaces/GenericFormType";
import cameraImage from '../assets/cannon-5d-markIV.jpeg';

export interface FormThreeType extends GenericFormType {
  [index: string]: any;

  image: string;
  title: string;
  category: number;
  condition: number;
  price: number;
  description: string;
  termsAndConditions: boolean;
}

/**
 * Dummy data
 */
const metadata: Metadata = {
  fields: [
    {
      id: 'image',
      type: 'file',
      label: "Image"
    },
    {
      id: 'title',
      type: 'text',
      label: 'Title'
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
      suffix: '$'
    },
    {
      id: 'description',
      type: 'textarea',
      label: 'Description',
      rows: 5
    },
    {
      id: 'termsAndConditions',
      type: 'checkbox',
      label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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
  condition: 3,
  price: 1049,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  termsAndConditions: false,
}

export default {metadata, data};
