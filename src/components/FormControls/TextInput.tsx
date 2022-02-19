import {TextInputInterface} from "../../interfaces";

const TextInput = ({id, label, type, disabled, value, error, ...props}: TextInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input className="form-control"
             {...{id, type, disabled}}
             {...props}/>
      {error && <small className="text-danger">{error}</small>}
    </div>
  )
}
export default TextInput;
