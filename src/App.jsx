import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Home from "./pages/Home";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Home />
    </DndProvider>
  );
};

export default App;
