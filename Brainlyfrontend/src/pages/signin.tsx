import { Inputbox } from "../components/inputbox";
import { Button } from "../components/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export  const Signin= ()=>{
    
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function Signipcall(){
        const username = usernameRef.current?.value ?? "";   
        const password = passwordRef.current?.value ?? "";

             try 
               { const response = await fetch("http://localhost:3000/api/v1/signin", {
                     method: "POST",
                     headers: { "Content-Type": "application/json" },
                     body: JSON.stringify({ username, password }),
                      });

                const data = await response.json();

              if (!response.ok) {
                    alert(data.message || "Signin failed");
                return;
                      }
              if (data.token) {
                   localStorage.setItem("token", data.token);
                        }

               navigate("/dashboard"); }
              
              catch (err) {
                  console.error(err);
                      alert("Something went wrong. Please try again.");
                     }
                 }

    return  ( <div className=" h-screen flex justify-center bg-[#ffffff] ">
                <div className="h-130 mt-20 w-120 rounded-2xl bg-[#f9fbfc]  border-1 border-gray-400 shadow-2xl ">
                  <div className="h-20 w-full text-4xl font-bold pt-10 pl-38 ">Sign In</div>
                  <div className="ml-16">
                    <Inputbox title={"Username"}  inputRef={usernameRef} />
                    <Inputbox title={"Password"} inputRef={passwordRef}/>
                  </div>
                  <div className="pl-34 pt-15">
                    <Button  text={"Signin "}  onClick={Signipcall} variant={"customstyle2"}/>
                  </div>
               </div>
             </div>)
}