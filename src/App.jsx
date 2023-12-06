import { Route, Routes } from "react-router-dom";
import ClientReg from './components/ClientReg/ClientReg'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import Navbar from './pages/navbar/Navbar'
import "./App.css"
import Footer from "./components/footer/Footer";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import Register from "./pages/Register/Register";
import ProviderReg from "./components/ProviderReg/ProviderReg";
import Test from "./pages/services/testservice";
import Services from "./pages/services/SErvices";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/creg" element={<ClientReg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/preg" element={<ProviderReg />} />
          <Route path="/search" element={<Services />} />
          <Route path="/test" element={<Test />} />

        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
