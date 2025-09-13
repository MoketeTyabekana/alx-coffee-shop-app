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

export interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

export interface HeaderProps {
  title?: string;
}

export interface FavoritesContextType {
  favorites: Coffee[];
  addToFavorites: (coffee: Coffee) => void;
  removeFromFavorites: (coffeeId: number) => void;
  toggleFavorite: (coffee: Coffee) => void;
}
