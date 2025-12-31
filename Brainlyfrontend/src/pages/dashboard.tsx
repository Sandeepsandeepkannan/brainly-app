
import { useState } from "react"
import { Addcontent } from "../components/addcontentinfo"
import { shareicon } from "../icons/shareicon"
import { Sidebar } from "../components/sidebar"
import { staricon } from "../icons/plusicon"
import { Button } from "../components/Button"
import { Card } from "../components/card"
import { useEffect } from "react"

 export function Dashboard() {
        
        const [showcontent,setshowcontent]=useState(false)
        const [contents, setContents] = useState([]);

        
        useEffect(() => {
                fetch("http://localhost:3000/api/v1/showcontent", {
                headers: {
                    Authorization: localStorage.getItem("token") || "",
                },
                })
                .then((res) => res.json())
                .then((data) => setContents(data.content || []));
            }, []);

        function handleContentAdded()
            {
                setshowcontent(false); 
             }


        return (
  
    <>
              {!showcontent?(
                <div className="flex">
                        <Sidebar />
                    <div className="h-screen w-full  bg-[#f9fbfc]">
                        <div className="flex h-18 mt-10  border-b border-b-gray-300 justify-between"> 
                            <div className="text-3xl font-bold pl-10 pt-5">All Notes</div> 
                            <div className="flex">
                                <Button text={"Share Brain"} starticon={shareicon()} variant={"secondary"}/>
                                <Button text={"Add content"} starticon={staricon()} onClick={()=>setshowcontent(true)}  variant={"primary"}/>
                            </div>
                        </div>
                        <div className=" h-screen  flex gap-4 flex-wrap p-6">
                            {/* <Card title={"React project"} description={"Project ideas"}  shareicon={shareicon()} content={<iframe width="300" className="rounded-2xl pl-2" height="225" src="https://www.youtube.com/embed/cUIRxFvAOqE?si=3gaoO7ZHvEkW7p_2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}/> */}
                            {contents.map((item: any) => (
                                    <Card key={item._id} title={item.title} description={item.link} shareicon={shareicon()}
                                        content={
                                            <iframe width="280" height="180"
                                            className="rounded-xl"
                                            src={item.link}title={item.title} allowFullScreen
                                            ></iframe>
                                        }
                                        />
                                    ))}
                        </div>
                    </div>
                    </div>
                ):<Addcontent  onSuccess={handleContentAdded}/>} 

    </>
   
  )
}

