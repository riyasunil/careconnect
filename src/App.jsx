import { Route, Routes } from "react-router-dom";
import ClientReg from './components/ClientReg/ClientReg'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import Navbar from './pages/navbar/Navbar'
import "./App.css"
import Services from "./pages/services/SErvices";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/creg" element={<ClientReg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
