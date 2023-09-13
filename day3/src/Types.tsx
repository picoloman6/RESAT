export interface ListType {
  id: number;
  text: string;
  importance: string;
  checked: boolean;
}

export interface FormType {
  text: string;
  importance: string;
  list: Array<ListType> | [];
}
