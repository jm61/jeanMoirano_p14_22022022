//import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * App component manage the route
 * @returns route
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;