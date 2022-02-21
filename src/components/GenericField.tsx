import {Field, GenericField} from "../interfaces";
import {FormFields} from "./FormControls";
import {ChangeEvent} from "react";

/**
 * Use independent generic form field
 * @param initValue
 * @param setFieldValue
 * @param props
 * @constructor
 */
const RenderGenericFormField = ({setFieldValue, ...props}: GenericField<unknown>) => {
  const FormControl = FormFields[props.type];

  /**
   * Manage emitting form field value
   * @param event
   * @param props
   */
  const handleChange = (event: ChangeEvent<any>, props: Field<any>) => {
    switch (props.type) {
      case 'checkbox': {
        const value = Boolean(event.target.checked);
        setFieldValue(props.id, value ? 1 : 0);
        break;
      }
      case 'file': {
        const value = URL.createObjectURL(event.target.files[0]);
        setFieldValue(props.id, value)
        break;
      }
      default: {
        setFieldValue(props.id, event.target.value)

      }
    }
  }

  return (
    FormControl && <FormControl {...props}
                                data-testid={props.id}
                                onChange={(event: any) => handleChange(event, props)}/>
  )
}

export default RenderGenericFormField;
