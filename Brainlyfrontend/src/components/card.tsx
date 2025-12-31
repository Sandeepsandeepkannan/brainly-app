import type { ReactElement, ReactNode } from "react";


interface cardprops{
    title:String;
    content:ReactNode;
    description?:String;
    shareicon?:ReactElement;


}

export function Card(props:cardprops){
 return <div className="h-106 w-80 bg-[#f9fbfc]  flex flex-col  rounded-2xl  border-2 border-gray-500  ">
         <div className="h-10 w-full  pl-20 pt-1 text-2xl flex">  {props.title} <div className="pt-2 pl-12">{props.shareicon} </div></div>
         <div className="pl-15  text-3xl font-semibold "> {props.description}</div>
         <div className="pt-14 pl-1 rounded-2xl"> {props.content}</div>
         <div>Tags</div>
        
 </div>
}