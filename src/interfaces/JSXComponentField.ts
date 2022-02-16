import React from "react";
import {Field} from "./Field";

export interface JSXComponentField {
  [key: string]: React.FC<Field<any>>
}
