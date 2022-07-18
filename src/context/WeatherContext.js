import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: 0,
    humidity: 0,
    country: "",
    icon: "",
    wind: 0,
    feels_like: 0,
    name: "",
  });

  return (
    <Context.Provider value={{ city, setCity, data, setData }}>
      {children}
    </Context.Provider>
  );
};
