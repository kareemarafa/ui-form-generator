import {TextInputInterface} from "../../interfaces";

const TextInput = ({id, label, type, disabled, value, ...props}: TextInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input className="form-control"
             {...{id, type, disabled}}
             {...props}/>
    </div>
  )
}
export default TextInput;
