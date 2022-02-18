import TextInput from "./TextInput";
import Textarea from "./Textarea";
import FileInput from "./FileInput";
import {JSXComponentField} from "../../interfaces";

export const FormFields: JSXComponentField = {
  text: TextInput,
  number: TextInput,
  textarea: Textarea,
  file: FileInput
}
