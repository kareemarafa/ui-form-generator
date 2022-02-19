import {TextInputInterface} from "../../interfaces";

const TextInput = ({id, label, type, disabled, value, errors, ...props}: TextInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input className="form-control"
             {...{id, type, disabled}}
             {...props}/>
      {(errors && errors?.length > 0) && <small className="text-danger">{errors.join(', ')}</small>}
    </div>
  )
}
export default TextInput;
