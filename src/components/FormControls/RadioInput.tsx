import {SelectInputInterface} from "../../interfaces/SelectInputInterface";

const RadioInput = ({id, label, type, disabled, value, defaultValue, ...props}: SelectInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      {props?.options?.map(option => (
        <div className="form-check" key={option.id}>
          <input className="form-check-input"
                 name={option.name + id}
                 id={option.name}
                 checked={defaultValue === option.id}
                 {...{type}}/>
          <label className="form-check-label"
                 htmlFor={option.name + id}>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  )
}
export default RadioInput;
