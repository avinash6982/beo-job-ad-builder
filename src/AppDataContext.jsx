import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Create a context for the application state
const AppContext = createContext();

// Provider component for the AppContext
export const AppDataProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [activeSections, setActiveSections] = useState([]);
  return (
    <AppContext.Provider
      value={{ sections, setSections, activeSections, setActiveSections }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Validate props for the AppDataProvider component
AppDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to access the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppDataProvider");
  }
  return context;
};
