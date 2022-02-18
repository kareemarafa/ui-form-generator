import {FormOneType, Metadata} from "../interfaces";

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
      id: 'age',
      type: 'number',
      label: 'Age'
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
