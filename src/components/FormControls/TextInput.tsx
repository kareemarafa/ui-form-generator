import {TextInputInterface} from "../../interfaces/TextInputInterface";

const TextInput = ({id, label, type, disabled, value}: TextInputInterface): JSX.Element => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input className="form-control"
             {...{id, type, disabled, value}}/>
    </div>
  )
}
export default TextInput;
