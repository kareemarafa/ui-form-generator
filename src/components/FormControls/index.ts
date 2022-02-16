import TextInput from "./TextInput";
import Textarea from "./Textarea";
import {JSXComponentField} from "../../interfaces/JSXComponentField";

export const FormFields: JSXComponentField = {
  text: TextInput,
  number: TextInput,
  textarea: Textarea
}
