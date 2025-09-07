import { Coffee } from "@/interfaces";

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and bold espresso shot with rich flavor.",
    image: require("../assets/images/coffee1.png"),
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
    image: require("../assets/images/coffee2.png"),
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
    image: require("../assets/images/coffee3.png"),
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
    image: require("../assets/images/coffee4.png"),
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
    image: require("../assets/images/coffee5.png"),
    sizes: [
      { size: "Small", price: 3.3 },
      { size: "Medium", price: 3.8 },
      { size: "Large", price: 4.3 },
    ],
  },
];

