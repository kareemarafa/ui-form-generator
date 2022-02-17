import {Field, Metadata, PersonalInfo} from "../interfaces";
import {FormFields} from "../components/FormControls";
import {FormEvent, useState} from "react";

const Form = () => {

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

  const data: PersonalInfo = {
    name: "Bob",
    age: 42,
    comment: "The best developer in the world"
  }

  const RenderGenericFormField = ({type, label, id, disabled, initValue, ...props}: Field<unknown>) => {
    const [value, setValue] = useState<typeof initValue>(initValue)
    const FormControl = FormFields[type];
    return (
      <FormControl {...{label, type, id, disabled, value}}
                   onChange={(e: any) => setValue(e.target.value)}
                   {...props}/>
    )
  }

  const [formValue, setFormValue] = useState<any>(data);

  // const handleChange = (event: any) => {
  //   setFormValue({...formValue, [event.target.id]: event.target.value});
  //   console.log(formValue)
  // }

  return (
    <form>
      {Object.keys(data).map((key: any) => {
        const [props] = metadata.fields.filter(meta => meta.id === key);
        return (
          props && <RenderGenericFormField key={props.id} {...props}
                                           initValue={formValue[key]} />
        )
      })}
    </form>
  )
}
export default Form;
