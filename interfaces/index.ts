export interface CoffeeSize {
  size: string;
  price: number;
}

export interface Coffee {
  id: number;
  name: string;
  description: string;
  descriptor?: string;
  image: any;
  sizes: CoffeeSize[];
  rating: number;
  numberOfRatings?: number;
}

export interface CoffeeCardProps {
  coffee: Coffee;
  onPress?: () => void;
}