import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://hotel-booking-api-52jl.onrender.com/api";

// Lazy loading the components
const Home = lazy(() => import("./pages/home/Home"));
const Hotel = lazy(() => import("./pages/hotel/Hotel"));
const List = lazy(() => import("./pages/list/List"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
