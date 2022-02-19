import {DateInputInterface} from "../../interfaces/DateInputInterface";

const DateInput = ({id, label, type, disabled, value, ...props}: DateInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input className="form-control"
             {...{id, type, disabled}}
             {...props}/>
    </div>
  )
}
export default DateInput;
