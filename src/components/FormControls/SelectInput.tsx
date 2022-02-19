import {SelectInputInterface} from "../../interfaces/SelectInputInterface";

const SelectInput = ({id, label, type, disabled, value, ...props}: SelectInputInterface) => {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <select className="form-select"
              {...{id, type, disabled}}
              {...props}>
        {props?.options?.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
      </select>
    </div>
  )
}
export default SelectInput;
