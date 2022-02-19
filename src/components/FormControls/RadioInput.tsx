import {RadioInputInterface} from "../../interfaces/RadioInputInterface";
import {useState} from "react";

const RadioInput = ({id, label, type, disabled, defaultValue, ...props}: RadioInputInterface) => {
  const [checked, setChecked] = useState<any>(defaultValue);
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      {props?.options?.map((option, index) => (
        <div className="form-check" key={index}>
          <input className="form-check-input"
                 {...props}
                 id={option.name}
                 name={option.name + option.id}
                 value={option.name}
                 checked={option.name === checked}
                 onChange={(e: any) => {
                   setChecked(e.target.value);
                   props.onChange && props.onChange(e)
                 }}
                 {...{type}}
          />
          <label className="form-check-label"
                 htmlFor={option.name + option.id}>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  )
}
export default RadioInput;
