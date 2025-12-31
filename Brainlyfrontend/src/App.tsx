import { Routes, Route } from "react-router-dom";
import { Signup } from "./pages/signup";
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/dashboard";
import { Navigate } from "react-router-dom";
function App() {
 
   return ( 
       <>
          <Routes>
             <Route path="/" element={<Navigate to="/signup" />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/signin" element={<Signin />} />
             <Route path="/dashboard" element={<Dashboard />} />
         </Routes>
        
       </>
   )
}
export default App
