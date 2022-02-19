import {GenericField} from "../interfaces";
import {FormFields} from "./FormControls";

/**
 * Use independent generic form field
 * @param initValue
 * @param setFieldValue
 * @param props
 * @constructor
 */
const RenderGenericFormField = ({setFieldValue, ...props}: GenericField<unknown>) => {
  const FormControl = FormFields[props.type];
  return (
    <FormControl
      {...props}
      onChange={(event: any) => setFieldValue(props.id, event.target.value)}/>
  )
}

export default RenderGenericFormField;
