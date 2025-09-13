import { Coffee } from "@/interfaces";

export const coffeeTypes = ["All Coffee", "Espresso", "Latte", "Cappuccino", "Mocha"];

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Espresso",
    description: "A bold and invigorating espresso shot crafted for true coffee lovers. Its intense aroma and rich crema deliver a concentrated burst of flavor that awakens the senses and fuels your day.",
    descriptor: "Espresso",
    image: require("../assets/images/coffee1.png"),
    rating: 4.7,
    numberOfRatings: 102,
    sizes: [
      { size: "S", price: 2.0 },
      { size: "M", price: 2.5 },
      { size: "L", price: 3.0 },
    ],
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "A timeless classic that balances bold espresso with velvety steamed milk and a cloud of airy foam. Perfect for those who crave a harmonious blend of strength and softness in every sip.",
    descriptor: "Foam",
    image: require("../assets/images/coffee2.png"),
    rating: 4.8,
    numberOfRatings: 64,
    sizes: [
      { size: "S", price: 2.5 },
      { size: "M", price: 3.0 },
      { size: "L", price: 3.5 },
    ],
  },
  {
    id: 3,
    name: "Latte",
    description: "Smooth and comforting, our latte combines robust espresso with a generous pour of steamed milk for a creamy, mellow experience. Ideal for slow mornings or cozy afternoons.",
    descriptor: "Creamy Milk",
    image: require("../assets/images/coffee3.png"),
    rating: 4.6,
    numberOfRatings: 85,
    sizes: [
      { size: "S", price: 3.0 },
      { size: "M", price: 3.5 },
      { size: "L", price: 4.0 },
    ],
  },
  {
    id: 4,
    name: "Americano",
    description: "A refined choice for those who prefer a smoother, less intense brew. Our Americano blends rich espresso with hot water, creating a clean, full-bodied flavor that’s easy to enjoy any time of day.",
    descriptor: "Diluted Espresso",
    image: require("../assets/images/coffee4.png"),
    rating: 4.5,
    numberOfRatings :47,
    sizes: [
      { size: "S", price: 2.3 },
      { size: "M", price: 2.8 },
      { size: "L", price: 3.3 },
    ],
  },
  {
    id: 5,
    name: "Mocha",
    description: "A decadent fusion of rich espresso, steamed milk, and indulgent chocolate. Our mocha is a sweet and satisfying treat that delivers warmth, comfort, and a hint of luxury in every cup.",
    descriptor: "Deep Foam",
    image: require("../assets/images/coffee5.png"),
    rating: 4.9,
    numberOfRatings: 120,
    sizes: [
      { size: "S", price: 3.3 },
      { size: "M", price: 3.8 },
      { size: "L", price: 4.3 },
    ],
  },
];

export const locations = [
  { id: 1, name: 'Bloemfontein' },
  { id: 2, name: 'Midrand' },
  { id: 3, name: 'Botshabelo' },
];