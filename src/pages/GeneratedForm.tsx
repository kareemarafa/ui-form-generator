import {GenericField} from "../interfaces";
import {FormFields} from "../components/FormControls";
import {FormEvent, useEffect, useState} from "react";
import {DynamicForm} from "../interfaces/DynamicForm";
import {GenericFormType} from "../interfaces/GenericFormType";

const GeneratedForm = ({metadata, data}: DynamicForm<GenericFormType>) => {

  /**
   * form state
   */
  const [formValue, setFormValue] = useState<any>({});

  /**
   * Use independent generic form field
   * @param initValue
   * @param setFieldValue
   * @param props
   * @constructor
   */
  const RenderGenericFormField = ({initValue, setFieldValue, ...props}: GenericField<unknown>) => {
    const FormControl = FormFields[props.type];
    useEffect(() => setFieldValue(props.id, initValue), []) // Set field value at form
    return (
      <FormControl
        value={formValue[props.id]}
        defaultValue={initValue}
        onChange={(event: any) => setFieldValue(props.id, event.target.value)} {...props}/>
    )
  }

  /**
   * Handle change event
   * It sets new value to the state object
   * @param fieldName
   * @param value
   */
  const handleChange = (fieldName: string, value: any) => {
    setFormValue((current: GenericFormType) => {
      current[fieldName] = value; // set current value with newest
      return current;
    });
  }

  /**
   * Handle submit event
   * Just to console
   * todo: implement backend errors
   * @param event
   */
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevent page loading by html default
    console.log(formValue)
  }

  return (
    <div className="col-8 offset-2">
      <form className="d-flex flex-column align-items-center"
            // onReset={handleReset} todo handle reset state
            onSubmit={handleSubmit}>
        {Object.keys(data).map((key: any) => {
          const [props] = metadata.fields.filter(meta => meta.id === key); // catch first item in the filtered array
          return (
            <div key={props.id} className="pb-3 w-100">
              {props && <RenderGenericFormField {...props}
                                                initValue={data[key]}
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
