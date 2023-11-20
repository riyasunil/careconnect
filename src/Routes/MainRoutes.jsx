
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      
       
        
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      
      </Routes>
    </div>
  );
};

export default MainRoutes