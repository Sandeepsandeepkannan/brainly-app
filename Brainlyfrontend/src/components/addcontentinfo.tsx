
import { Inputbox } from "./inputbox"
import { Button } from "./Button"
import { useRef } from "react";

type AddcontentProps = {
  onSuccess: () => void; // 👈 callback from Dashboard
};

export  const Addcontent= ({ onSuccess }: AddcontentProps)=>{
    
    const linkRef = useRef<HTMLInputElement | null>(null);
    const titleRef = useRef<HTMLInputElement | null>(null);
    
         
        async function Addurl() {
          
            const link = linkRef.current?.value ?? "";
            const title = titleRef.current?.value ?? "";
            
            console.log("Link =>", link);
            console.log("Title =>", title);

            try {
              const res = await fetch("http://localhost:3000/api/v1/content", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("token") || "",
                },
                body: JSON.stringify({ link, title }),
              });

              const data = await res.json();
              console.log("Backend Response:", data);

              if (!res.ok) {
                alert(data.message || "Could not add content");
                return;
              }
             
              alert("Content added successfully!");
              onSuccess(); 
              
            } 
             catch (err) {
              console.error(err);
              alert("Could not connect to backend (CORS/server down/wrong URL)");
            }

          }

    return  ( <div className=" h-screen flex justify-center bg-[#ffffff] ">
                <div className="h-130 mt-20 w-120 rounded-2xl bg-[#f9fbfc]  border-1 border-gray-400 shadow-2xl ">
                  <div className="h-20 w-full text-4xl font-semibold pt-10 pl-20 ">Add  Content Here</div>
                  <div className="ml-16">
                    <Inputbox title={"Link"}  inputRef={linkRef} />
                    <Inputbox title={"Title"} inputRef={titleRef}/>
                  </div>
                  <div className="pl-34 pt-15">
                    <Button  text={"Add "}  onClick={Addurl} variant={"default"}/>
                  </div>
               </div>
             </div>)
}