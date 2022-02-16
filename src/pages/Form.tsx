import {Metadata} from "../interfaces/Metadata";
import {PersonalInfo} from "../interfaces/PersonalInfo";
import {FormFields} from "../components/FormControls";
import {Field} from "../interfaces/Field";

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

  const RenderGenericFormField = ({type, label, id, disabled, value}: Field) => {
    const FormControl = FormFields[type];
    return (
      <FormControl {...{label, type, id, disabled, value}}/>
    )
  }

  return (
    <form>
      {Object.keys(data).map((key: string) => {
        const [meta] = metadata.fields.filter(meta => meta.id === key);
        return (
          meta && <RenderGenericFormField key={meta.id} {...meta}/>
        )
      })}
    </form>
  )
}
export default Form;
