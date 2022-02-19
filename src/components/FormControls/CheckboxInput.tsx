import {CheckboxInputInterface} from "../../interfaces/CheckboxInputInterface";

const CheckboxInput = ({label, ...props}: CheckboxInputInterface) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      {props?.extras?.content && <div className="card d-block">
        <div className="card-body">
          <small className="text-muted">{props?.extras?.content}</small>
        </div>
      </div>}
      <div className="form-check">
        <input className={`form-check-input ${!props.disabled && 'cursor-pointer'}`}
               checked={!!props.value}
               {...props} />
        <label className={`form-check-label ${!props.disabled && 'cursor-pointer'}`}
               htmlFor={props.id}>{props?.extras?.controlLabel}</label>
      </div>
    </div>
  )
}
export default CheckboxInput;
