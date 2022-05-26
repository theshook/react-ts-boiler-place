import { IQueryFilters } from "./IQueryFilters.interface";

export interface ITodoFilters extends IQueryFilters {
  user_id?: number;
  title?: string;
  completed?: boolean
}