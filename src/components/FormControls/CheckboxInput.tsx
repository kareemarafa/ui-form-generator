import {CheckboxInputInterface} from "../../interfaces/CheckboxInputInterface";

const CheckboxInput = ({id, label, type, disabled, value, defaultValue, ...props}: CheckboxInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      {props?.options?.map(option => (
        <div className="form-check">
          <input className="form-check-input" {...{type, id}}
                 checked={!!value}
                 {...{props}}
          />
            <label className="form-check-label" htmlFor={id}>
              {option.name}
            </label>
        </div>
      ))}

    </div>
  )
}
export default CheckboxInput;
