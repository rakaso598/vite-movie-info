import { useState, createContext, useContext } from "react";

const LocaleContext = createContext();

export const LocaleProvider = ({ children, defaultValue = "ko" }) => {
  const [locale, setLocale] = useState(defaultValue);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("LocaleProdiver 안에서 사용해주세요.");
  }

  return context;
};
