import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Lost from "./pages/Lost";
import Erreur404 from "./pages/Erreur404";
import HttpCode from "./pages/HttpCode";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lost" element={<Lost />} />
            <Route path="/:id" element={<HttpCode />} />

          <Route path="/*" element={<Erreur404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
