import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home/home";


const RoutesSite= () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
    
      </Routes>
    </BrowserRouter>
   )
}

export default RoutesSite;
