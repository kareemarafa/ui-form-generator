import {Metadata} from "./Metadata";

export interface DynamicForm<T> {
  metadata: Metadata;
  data: T;
}
