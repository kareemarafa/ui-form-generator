import {RadioInputInterface} from "../../interfaces/RadioInputInterface";

const RadioInput = ({id, label, disabled, defaultValue, ...props}: RadioInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      {props?.options?.map((option, index) => (
        <div className="form-check" key={index}>
          <input className="form-check-input cursor-pointer"
                 {...props}
                 id={option.name}
                 value={option.name}
                 checked={option.name === props.value}
          />
          <label className="form-check-label cursor-pointer" htmlFor={option.name}>{option.name}</label>
        </div>
      ))}
    </div>
  )
}
export default RadioInput;
