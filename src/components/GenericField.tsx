import {GenericField} from "../interfaces";
import {FormFields} from "./FormControls";
import {useEffect} from "react";

/**
 * Use independent generic form field
 * @param initValue
 * @param setFieldValue
 * @param value
 * @param error
 * @param props
 * @constructor
 */
const RenderGenericFormField = ({initValue, setFieldValue, value, errors, ...props}: GenericField<unknown>) => {
  const FormControl = FormFields[props.type];
  useEffect(() => setFieldValue(props.id, initValue), []) // Set field value at form
  return (
    <FormControl
      {...{value, errors}}
      defaultValue={initValue}
      onChange={(event: any) => setFieldValue(props.id, event.target.value)} {...props}/>
  )
}

export default RenderGenericFormField;
