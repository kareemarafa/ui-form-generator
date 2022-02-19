import {FormEvent, useState} from "react";
import {DynamicForm} from "../interfaces/DynamicForm";
import {GenericFormType} from "../interfaces/GenericFormType";
import RenderGenericFormField from "../components/GenericField";

const GeneratedForm = ({metadata, data}: DynamicForm<GenericFormType>) => {

  /**
   * form state
   */
  const [formValue, setFormValue] = useState<any>({});

  /**
   * Handle change event
   * It sets new value to the state object
   * @param fieldName
   * @param value
   */
  const handleChange = (fieldName: string, value: any) => {
    setFormValue({...formValue, [fieldName]: value})
  }

  /**
   * Handle submit event
   * todo: implement backend errors
   * @param event
   */
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevent page loading by html default
    alert(JSON.stringify(formValue))
  }

  /**
   * Handle reset event
   */
  const handleReset = () => setFormValue(data);

  return (
    <div className="col-8 offset-2">
      <form className="d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
            onReset={handleReset}>
        {Object.keys(data).map((key: any) => {
          const [props] = metadata.fields.filter(meta => meta.id === key); // catch first item in the filtered array
          return (
            <div key={props.id} className="pb-3 w-100">
              {props && <RenderGenericFormField {...props}
                                                initValue={data[key]}
                                                value={formValue[props.id]}
                                                setFieldValue={handleChange}/>}
            </div>

          )
        })}
        <div className="w-100 mt-2">
          <div className="d-flex justify-content-end">
            <button type="reset" className="btn btn-default mx-2">Reset</button>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default GeneratedForm;
