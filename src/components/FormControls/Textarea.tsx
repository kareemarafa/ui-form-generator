import {TextareaInterface} from "../../interfaces";

const Textarea = ({id, label, disabled, value, ...props}: TextareaInterface) => {
  return (
    <>
      <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <textarea id={id} className="form-control" defaultValue={value} {...{disabled}} {...props} />
      </div>
    </>
  )
}
export default Textarea;
