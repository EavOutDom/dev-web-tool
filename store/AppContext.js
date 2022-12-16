import { createContext, useEffect, useMemo, useReducer } from "react";
import { appReducer } from "./appReducer";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, {
    dark: null,
    loading: false,
  });

  useEffect(() => {
    if (localStorage.getItem('darkMode')) {
      appDispatch({ type: 'SET_DARK', payload: true });
    } else {
      appDispatch({ type: 'SET_DARK', payload: false });
    }
  }, []);

  const contextValue = useMemo(() => ({
    appState,
    appDispatch
  }), [appState, appDispatch]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppContextProvider;