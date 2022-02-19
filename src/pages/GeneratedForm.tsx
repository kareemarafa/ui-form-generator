import {FormEvent, useEffect, useState} from "react";
import {DynamicForm} from "../interfaces/DynamicForm";
import {GenericFormType} from "../interfaces/GenericFormType";
import RenderGenericFormField from "../components/GenericField";
import {useLocation} from 'react-router-dom';

const GeneratedForm = ({metadata, data}: DynamicForm<GenericFormType>) => {

  const useLocationChange = (action: any) => {
    const location = useLocation()
    useEffect(() => {
      action(location)
    }, [location])
  }

  useLocationChange(() => handleReset())

  /**
   * form state
   */
  const [formValue, setFormValue] = useState<any>(data);
  const [formErrors, setFormErrors] = useState<any>({});

  useEffect(() => handleErrors(), [formValue])

  const handleErrors = () => {
    let errors = {};
    Object.keys(formValue).forEach(() => {
      metadata.fields.forEach(({id, validators}) => {
        const fieldErrors: string[] = [];
        validators && validators.forEach((validator: any) => {
          const errorState = validator(formValue[id]);
          typeof errorState === 'string' && fieldErrors.push(errorState);
        })
        errors = {...errors, [id]: fieldErrors};
      });
    })
    setFormErrors({...formErrors, ...errors})
  }

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
            props && <div key={props.id} className="pb-3 w-100">
              <RenderGenericFormField {...props}
                                                errors={formErrors[props.id]}
                                                value={formValue[props.id]}
                                                setFieldValue={handleChange}/>
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
      <pre>{JSON.stringify(formValue, null, 2)}</pre>
    </div>
  )
}
export default GeneratedForm;
