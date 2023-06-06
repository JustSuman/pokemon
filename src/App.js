import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import AllPokemon from "./components/allPokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all" element={<AllPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
