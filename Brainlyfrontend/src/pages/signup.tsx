
import { Inputbox } from "../components/inputbox"
import { Button } from "../components/Button"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

   export  const Signup= ()=>{
          
            const usernameRef = useRef<HTMLInputElement | null>(null);
            const passwordRef = useRef<HTMLInputElement | null>(null);
            const emailRef  = useRef<HTMLInputElement | null>(null);
            const navigate = useNavigate();
            
    async function Signupcall() {  
              const username = usernameRef.current?.value ?? "";
              const password = passwordRef.current?.value ?? "";
              const email = emailRef.current?.value ?? "";

        try {
            const res = await fetch("http://localhost:3000/api/v1/signup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, password, email }),
            });

            const data = await res.json();
            console.log("Signup response:", data);

           if (!res.ok) {
                 alert(data.message || "Signup failed");
              return;                  
            }

            navigate("/signin");}
            
       catch (err) {
              console.error(err);
                 alert("Could not connect to backend (CORS / server down / wrong URL)");
          }
        }


     async function Alreadysignuped() {
            navigate("/signin");
          

     }


    return  ( <div className=" h-screen flex justify-center bg-[#ffffff] ">
                <div className="h-130 mt-20 w-120 rounded-2xl bg-[#f9fbfc]  border-1 border-gray-400 shadow-2xl ">
                  <div className="h-20 w-full text-4xl font-bold pt-10 pl-38 ">Sign Up </div>
                  <div className="ml-16">
                    <Inputbox title={"Username"}  inputRef={usernameRef} />
                    <Inputbox title={"Password"} inputRef={passwordRef}/>
                    <Inputbox title={"Email"} inputRef={emailRef}/>
                  </div>
                  <div className="pl-27 pt-7">
                    <Button  text={"Signup "}  onClick={Signupcall} variant={"default"}/>
                     <Button  text={"Already signed up? "}  onClick={Alreadysignuped} variant={"customstyle1"}/>
                  </div>
               </div>
             </div>)
}