import {CheckboxInputInterface} from "../../interfaces/CheckboxInputInterface";
import {useEffect, useState} from "react";

const CheckboxInput = ({id, label, type, disabled, defaultValue, ...props}: CheckboxInputInterface) => {
  const [checked, setChecked] = useState<any>(!!defaultValue);
  useEffect(() => {
    const event: any = {
      target: {
        value: checked
      }
    }
    props.onChange && props.onChange(event);
  }, [checked]);

  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      {props?.extras?.content && <div className="card d-block">
        <div className="card-body">
          <small className="text-muted">{props?.extras?.content}</small>
        </div>
      </div>}
      {props?.options?.map(option => (
        <div key={option.name} className="form-check">
          <input className="form-check-input"
                 {...props}
                 {...{type}}
                 id={option.name}
                 value={checked}
                 onChange={() => setChecked(!checked)}
          />
          <label className="form-check-label" htmlFor={option.name}>
            {option.name}
          </label>
        </div>
      ))}

    </div>
  )
}
export default CheckboxInput;
