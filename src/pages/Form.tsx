import {Field, Metadata, PersonalInfo} from "../interfaces";
import {FormFields} from "../components/FormControls";

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

  const RenderGenericFormField = ({type, label, id, disabled, value, ...props}: Field<unknown>) => {
    const FormControl = FormFields[type];
    return (
      <FormControl {...{label, type, id, disabled, value}} {...props}/>
    )
  }

  return (
    <form>
      {Object.keys(data).map((key: any) => {
        const [props] = metadata.fields.filter(meta => meta.id === key);
        return (
          props && <RenderGenericFormField key={props.id} {...props}
                                           value={data[key]}
                                           onChange={console.log}/>
        )
      })}
    </form>
  )
}
export default Form;
