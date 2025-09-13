// FavoritesContext.tsx
import { Coffee } from "@/interfaces";
import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

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

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);