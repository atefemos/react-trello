import "./App.css";
import Home from "./pages/home";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <header>
          <Home />
        </header>
      </DndProvider>
    </div>
  );
}

export default App;
