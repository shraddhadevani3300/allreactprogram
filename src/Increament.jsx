import { useState } from "react";

const Increament=()=>{
   const [count, setCount]= useState(0);

//    const increase=()=>{
//     setCount((val)=>val+1);
//    }
return(
    <>
        <button onClick={()=>setCount((val)=>val+1)}>Count {count}</button>
    </>
)
}
export default Increament;