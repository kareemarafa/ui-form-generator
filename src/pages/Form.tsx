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

  const RenderGenericFormField = (fieldMetadata: Field) => {
    const FormControl = FormFields[fieldMetadata.type]
    return (
      <FormControl key={fieldMetadata.id}
                   label={fieldMetadata.label}
                   type={fieldMetadata.type}
                   id={fieldMetadata.id}/>
    )
  }

  return (
    <form>
      {Object.keys(data).map((key: any) => {
        const fieldMetadata = metadata.fields.filter(meta => meta.id === key)[0];
        return (
          <RenderGenericFormField {...fieldMetadata} />
        )
      })}
    </form>
  )
}
export default Form;
