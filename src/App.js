import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import {Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Products from "./components/Products/Products";

function App() {

  const {state} = useContext(AuthContext)

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
