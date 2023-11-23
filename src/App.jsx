import "./App.css";
import { Route, Routes } from "react-router-dom";
{/*import { useState } from 'react'




import MainRoutes from './Routes/MainRoutes';*/}
import AuthHome from './pages/AuthHome/AuthHome';
import AuthRoute from './components/AuthRoute';
import Home from './pages/Home/Home';
import Navbar from "./pages/navbar/Navbar";
import ClientReg from './components/ClientReg/ClientReg';
import Login from './pages/Login/Login';
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      <div className ="app">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Services />}/>
            <Route path="/creg" element={<ClientReg />} />
            <Route path="/login" element={<Login />} />
  
           
 
      
      
      
            <Route element={<AuthRoute />}>
              <Route path="/" element={<AuthHome />} />
              <Route path="/home" element={<Home />} />
            </Route>
         </Routes>
         <Footer/>
      </div>
    </>
  )
}

export default App
