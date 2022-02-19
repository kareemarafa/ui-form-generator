import {TextInputInterface} from "../../interfaces";

const TextInput = ({id, label, errors, ...props}: TextInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input className="form-control" {...props}/>
      {(errors && errors?.length > 0) && <small className="text-danger">{errors.join(', ')}</small>}
    </div>
  )
}
export default TextInput;
