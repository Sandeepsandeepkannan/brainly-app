import React from "react";

interface inputprops{
    title:string;
    inputRef?: React.RefObject<HTMLInputElement | null>;
}

export const Inputbox=(props:inputprops)=>{
    return <div>  <input  ref={props.inputRef} className="border-[1px] h-12 pl-30 text-xl w-85  rounded-xl mt-10" type="text" placeholder={props.title}/></div>
}