export interface CoffeeSize {
  size: string;
  price: number;
}

export interface Coffee {
  id: number;
  name: string;
  description: string;
  image: any;
  sizes: CoffeeSize[];
}