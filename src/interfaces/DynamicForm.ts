import {Metadata} from "./Metadata";
import {FormEvent} from "react";

export interface DynamicForm<T> {
  metadata: Metadata;
  data: T;
  serverError?: Record<string, string[]>;
  handleSubmit?: (event: FormEvent, formObj: any) => void;
}
