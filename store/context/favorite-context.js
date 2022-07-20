import React, { useContext, useState } from "react";

const FavoritesContext = React.createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addItem = (id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeItem = (id) => {
    setFavoriteMealIds((currentIds) =>
      currentIds.filter((mealId) => mealId !== id)
    );
  };
  return (
    <FavoritesContext.Provider value={{ favoriteMealIds, addItem, removeItem }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const globalContext = () => {
  return useContext(FavoritesContext);
};

export default FavoritesContextProvider;
