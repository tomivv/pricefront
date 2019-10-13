import React from 'react';
// componentti joka on vastuussa tiedon välittämisestä componenttien välillä
export const ProductContext = React.createContext();

export const ProductProvider = ProductContext.Provider;