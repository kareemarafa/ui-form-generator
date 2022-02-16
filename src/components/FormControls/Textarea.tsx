import {TextInputInterface} from "../../interfaces/TextInputInterface";

const Textarea = (props: TextInputInterface): JSX.Element => {
  return (
    <>
      <div key={props.id}>
        <label className="form-label" htmlFor={props.id}>{props.label}</label>
        <textarea id={props.id} className="form-control" disabled={props.disabled}/>
      </div>
    </>
  )
}
export default Textarea;
