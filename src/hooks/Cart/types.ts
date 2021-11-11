export type IItem = {
  id: string;
  name: string;
  value: number;
  quantity: number;
  discount: number;
};

export type ICartContextData = {
  items: IItem[];
  add: (item: IItem) => void;
  remove: (id: string) => void;
};
