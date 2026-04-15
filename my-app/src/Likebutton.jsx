import { useState } from "react";

function Likebutton({name}){
    const [count,setcount] = useState(0);

    return(
        <div>
            <button onClick={()=> setcount(count+1)}>
                😔
            </button>
            <p>{name}:{count}</p>
        </div>
    )

}

export default function App(){
    return (
        <>
        <Likebutton name="post"/>
        <Likebutton name = "comment"/>
        </>
    )
}