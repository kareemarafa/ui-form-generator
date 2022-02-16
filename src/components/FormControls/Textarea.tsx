import {TextInputInterface} from "../../interfaces/TextInputInterface";

const Textarea = ({id, label, disabled, value}: TextInputInterface): JSX.Element => {
  return (
    <>
      <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <textarea id={id} className="form-control" disabled={disabled} defaultValue={value} />
      </div>
    </>
  )
}
export default Textarea;
