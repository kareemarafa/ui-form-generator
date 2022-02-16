import {TextInputInterface} from "../../interfaces/TextInputInterface";

const TextInput = (props: TextInputInterface): JSX.Element => {
  return (
    <>
      <div key={props.id}>
        <label className="form-label" htmlFor={props.id}>{props.label}</label>
        <input id={props.id} className="form-control" type={props.type}/>
      </div>
    </>
  )
}
export default TextInput;
