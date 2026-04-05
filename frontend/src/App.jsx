import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
 
export default App;