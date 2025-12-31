import type { ReactElement } from "react";


interface buttonprops{
    text:String;
    starticon?:ReactElement;
    variant:"primary"|"secondary"|"default"|"customstyle1"|"customstyle2"
    onClick?:()=>void;
}

const variantstyles={
    primary:"p-2 m-2 pt-3 bg-[#5046e4] font-semibold rounded-2xl text-xl text-white w-45 ",
    secondary:"p-2  pt-3 m-2 bg-[#e0e7ff] font-semibold text-[#4e47b7] rounded-2xl w-45 text-xl",
    default:"p-2 pl-9 ml-10 pt-2 bg-[#5046e4] font-semibold rounded-2xl text-2xl text-white w-45 ",
    customstyle1:"p-2  mt-6 pt-2 bg-[#5046e4] font-semibold rounded-2xl text-2xl text-white w-65 ",
    customstyle2:"p-2 pl-7 mt-6 pt-2 bg-[#5046e4] font-semibold rounded-2xl text-2xl text-white w-45 "
}

export const Button=(props:buttonprops)=>{
    return <button className={`${variantstyles[props.variant]} flex` } onClick={props.onClick}>
      <div className="pt-2  pl-2 pr-2">{props.starticon}</div>
      {props.text}
    </button>
}