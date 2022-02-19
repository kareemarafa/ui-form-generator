import {DateInputInterface} from "../../interfaces/DateInputInterface";

const DateInput = ({id, label, ...props}: DateInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input className="form-control"
             {...{id}}
             {...props}/>
    </div>
  )
}
export default DateInput;
