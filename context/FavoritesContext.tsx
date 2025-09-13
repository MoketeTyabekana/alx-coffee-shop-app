import { Coffee } from "@/interfaces";
import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState<Coffee[]>([]);

  const addToFavorites = (coffee: Coffee) => {
    if (!favorites.some((fav) => fav.id === coffee.id)) {
      setFavorites([...favorites, coffee]);
    }
  };

  const removeFromFavorites = (coffeeId: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== coffeeId));
  };

  const toggleFavorite = (coffee: Coffee) => {
    const isFavorite = favorites.some((fav) => fav.id === coffee.id);
    if (isFavorite) {
      removeFromFavorites(coffee.id);
    } else {
      addToFavorites(coffee);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};