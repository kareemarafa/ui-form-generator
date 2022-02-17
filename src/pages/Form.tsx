import {GenericField, Metadata, PersonalInfo} from "../interfaces";
import {FormFields} from "../components/FormControls";
import {FormEvent, useEffect, useState} from "react";

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

  const RenderGenericFormField = ({initValue, setFieldValue, ...props}: GenericField<unknown>) => {
    const FormControl = FormFields[props.type];
    useEffect(() => setFieldValue(props.id, initValue), []) // Set field value at form
    return (
      <FormControl
        defaultValue={initValue}
        onChange={(event: any) => setFieldValue(props.id, event.target.value)} {...props}/>
    )
  }

  const [formValue, setFormValue] = useState<any>({});

  const handleChange = (fieldName: string, value: any) => {
    setFormValue((current: PersonalInfo) => {
      current[fieldName] = value
      return current;
    });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(data).map((key: any) => {
        const [props] = metadata.fields.filter(meta => meta.id === key); // catch first item in the filtered array
        return (
          props && <RenderGenericFormField key={props.id} {...props}
                                           initValue={data[key]}
                                           setFieldValue={handleChange}/>
        )
      })}
      <div className="row mt-2">
        <div className="col">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  )
}
export default Form;
