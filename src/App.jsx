import { useAppContext } from "./AppDataContext";
import "./App.css";

function App() {
  const { data } = useAppContext();
  return (
    <>
      <div>
        {console.log(data)}
        <h1>Job Ad Builder</h1>
      </div>
    </>
  );
}

export default App;
