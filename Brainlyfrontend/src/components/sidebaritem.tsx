import type { ReactElement } from "react";


interface sidebaritem{
    starticon:ReactElement;
    text:String;
}
export function Sidebaritem(props:sidebaritem){
 return <div className="  bg-gray-200 hover:bg-gray-300 text-[#656a76] text-xl font-semibold flex  h-10 rounded pl-6 pt-1 w-50 mt-5"> <div className="pt-1 pr-2 ">{props.starticon}</div> {props.text} </div>
} 