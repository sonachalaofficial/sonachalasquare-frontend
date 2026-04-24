import { createContext, useState } from "react";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <PropertyContext.Provider value={{ selectedProperty, setSelectedProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};
