import { Coffee } from "@/interfaces";

export const coffeeTypes = ["All Coffee", "Espresso", "Latte", "Cappuccino", "Mocha"];

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and bold espresso shot with rich flavor.",
    descriptor: "Espresso",
    image: require("../assets/images/coffee1.png"),
    rating: 4.7,
    sizes: [
      { size: "Small", price: 2.0 },
      { size: "Medium", price: 2.5 },
      { size: "Large", price: 3.0 },
    ],
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Classic cappuccino with steamed milk and foam.",
    descriptor: "Foam",
    image: require("../assets/images/coffee2.png"),
    rating: 4.8,
    numberOfRatings: 64,
    sizes: [
      { size: "Small", price: 2.5 },
      { size: "Medium", price: 3.0 },
      { size: "Large", price: 3.5 },
    ],
  },
  {
    id: 3,
    name: "Latte",
    description: "Smooth latte with creamy steamed milk.",
    descriptor: "Creamy Milk",
    image: require("../assets/images/coffee3.png"),
    rating: 4.6,
    numberOfRatings: 85,
    sizes: [
      { size: "Small", price: 3.0 },
      { size: "Medium", price: 3.5 },
      { size: "Large", price: 4.0 },
    ],
  },
  {
    id: 4,
    name: "Americano",
    description: "Espresso diluted with hot water for a milder taste.",
    descriptor: "Diluted Espresso",
    image: require("../assets/images/coffee4.png"),
    rating: 4.5,
    numberOfRatings :47,
    sizes: [
      { size: "Small", price: 2.3 },
      { size: "Medium", price: 2.8 },
      { size: "Large", price: 3.3 },
    ],
  },
  {
    id: 5,
    name: "Mocha",
    description: "Chocolate-flavored coffee with steamed milk and espresso.",
    descriptor: "Deep Foam",
    image: require("../assets/images/coffee5.png"),
    rating: 4.9,
    numberOfRatings: 120,
    sizes: [
      { size: "Small", price: 3.3 },
      { size: "Medium", price: 3.8 },
      { size: "Large", price: 4.3 },
    ],
  },
];

export const locations = [
  { id: 1, name: 'Bloemfontein' },
  { id: 2, name: 'Midrand' },
  { id: 3, name: 'Botshabelo' },
];