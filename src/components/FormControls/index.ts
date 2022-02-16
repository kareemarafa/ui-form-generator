import TextInput from "./TextInput";
import Textarea from "./Textarea";
import {JSXComponentField} from "../../interfaces";

export const FormFields: JSXComponentField = {
  text: TextInput,
  number: TextInput,
  textarea: Textarea
}
