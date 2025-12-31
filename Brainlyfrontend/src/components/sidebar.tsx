
import { Sidebaritem } from "./sidebaritem"
import { shareicon } from "../icons/shareicon"
import { secondbrainicon } from "../icons/hat"
import {  youtubeicon } from "../icons/youtube"
import { tweeticon } from "../icons/tweet"
import { docummenticon } from "../icons/document"
import { tagicon } from "../icons/tag"


export function Sidebar(){
    return <div className=" h-screen w-100  bg-[#ffffff]  border-r-2  border-r-[#f1f3f5] "> 
         <div className="h-20 ">
         <div className="flex  h-10 text-3xl  pt-5 font-bold pl-5 ">
            <div className="pr-3">{secondbrainicon()}</div>
            <span> Second Brain</span>
         </div>
         </div>
         <div  className="mt-2 ml-12" >
           <Sidebaritem text={"Tweets"} starticon={tweeticon()}/>
           <Sidebaritem text={"Videos"} starticon={youtubeicon()}/>
           <Sidebaritem text={"Document"} starticon={docummenticon()}/>
           <Sidebaritem text={"Links"} starticon={shareicon()}/>
           <Sidebaritem text={"Tags"} starticon={tagicon()}/>
        </div>
    </div>
}