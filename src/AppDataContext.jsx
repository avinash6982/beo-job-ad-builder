import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Create a context for the application state
const AppContext = createContext();

// Provider component for the AppContext
export const AppDataProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [activeSections, setActiveSections] = useState([]);
  const [colorScheme, setColorScheme] = useState({
    topbarColor: "#333",
    jobPostingBackgroundColor: "#4f46e5",
  });
  const [textContent, setTextContent] = useState({
    topbarText: "Job Company",
    title: "Join Our Team!",
    subTitle: "We are looking for talented individuals.",
  });
  const [logo, setLogo] = useState(null);

  return (
    <AppContext.Provider
      value={{
        sections,
        setSections,
        activeSections,
        setActiveSections,
        colorScheme,
        setColorScheme,
        logo,
        setLogo,
        textContent,
        setTextContent,
      }}
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
