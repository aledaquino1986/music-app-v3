import { createContext, useContext, useState } from "react";

const ButtonContext = createContext();

const ButtonLibraryContextProvider = ({ children }) => {
  const [hiddenButtonState, sethiddenButtonState] = useState(false);

  const changeButtonState = () => {
    sethiddenButtonState(!hiddenButtonState);
  };

  return (
    <ButtonContext.Provider value={{ hiddenButtonState, changeButtonState }}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonLibraryContextProvider;

export const useButtonContext = () => {
  const { hiddenButtonState, changeButtonState } = useContext(ButtonContext);

  return { hiddenButtonState, changeButtonState };
};
