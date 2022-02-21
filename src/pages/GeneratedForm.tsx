import {useEffect, useState} from "react";
import {DynamicForm} from "../interfaces/DynamicForm";
import {GenericFormType} from "../interfaces/GenericFormType";
import RenderGenericFormField from "../components/GenericField";
import {useLocation} from 'react-router-dom';

const GeneratedForm = ({metadata, data, serverError, handleSubmit}: DynamicForm<GenericFormType>) => {

  /**
   * form state
   */
  const [formValue, setFormValue] = useState<any>(data);
  const [formErrors, setFormErrors] = useState<any>(serverError);
  const [valid, setValid] = useState<null | boolean>(null);

  /**
   * Handle Route change state
   */
  const location = useLocation()
  useEffect(() => handleReset(), [location])


  /**
   * Handle backend REST validations
   */
  useEffect(() => {
    if (serverError && Object.keys(serverError).length) {
      setFormErrors(serverError)
    }
  }, [serverError]);

  /**
   * Handle user input validations
   */
  useEffect(() => handleErrors(), [formValue])

  /**
   * Loop over validators for each field
   * @return record of {inputId: ['error text']}
   */
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
   * Handle reset event
   */
  const handleReset = () => {
    setFormValue(data);
    setFormErrors({})
  }

  /**
   * Set form validation
   */
  useEffect(() => {
    const errorsExist = Object.values(formErrors).reduce((x: any, y: any) => Math.max(x, y.length), 0);
    setValid(!Boolean(errorsExist));
  }, [formErrors])


  return (
    <div className="col-8 offset-2">
      <form className="d-flex flex-column align-items-center"
            onSubmit={(e) => valid && handleSubmit && handleSubmit(e, formValue)}
            onReset={handleReset}>
        {Object.keys(data).map((key: any) => {
          const [props] = metadata.fields.filter(meta => meta.id === key); // catch first item in the filtered array
          return (
            props && <div key={props.id} className="pb-3 w-100">
              <RenderGenericFormField {...props}
                                      errors={formErrors[props.id]}
                                      value={formValue[props.id] ?? ''}
                                      setFieldValue={handleChange}/>
            </div>
          )
        })}
        <div className="w-100 mt-2">
          <div className="d-flex justify-content-end">
            <button type="reset" className="btn btn-default mx-2">Reset</button>
            <button type="submit" className="btn btn-outline-primary" disabled={!valid}>Submit</button>
          </div>
        </div>
      </form>
      <pre>{JSON.stringify(formValue, null, 2)}</pre>
    </div>
  )
}
GeneratedForm.defaultProps = {
  serverError: {}
};
export default GeneratedForm;

