export interface IIteamRate {
  rate: number;
  count: number;
}

export interface IItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: IIteamRate;
}

export type IAddToCart = (val: number) => void;
