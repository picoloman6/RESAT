export interface ListType {
  id: number;
  text: string;
  importance: string;
  checked: boolean;
}

export interface FormType {
  [key: string]: string | Array<ListType> | [];
  text: string;
  importance: string;
  list: Array<ListType> | [];
}
