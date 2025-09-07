import { Coffee } from "@/interfaces";

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Espresso",
    image: require("../assets/images/coffee1.png"),
    price: 2.5,
  },
  {
    id: 2,
    name: "Cappuccino",
    image: require("../assets/images/coffee2.png"),
    price: 3.0,
  },
  {
    id: 3,
    name: "Latte",
    image: require("../assets/images/coffee3.png"),
    price: 3.5,
  },
  {
    id: 4,
    name: "Americano",
    image: require("../assets/images/coffee4.png"),
    price: 2.8,
  },
  {
    id: 5,
    name: "Mocha",
    image: require("../assets/images/coffee5.png"),
    price: 3.8,
  },
];

