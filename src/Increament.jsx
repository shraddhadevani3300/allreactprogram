import React, { useMemo } from 'react';
import { useState } from "react";

const Increament=()=>{
   const [count, setCount]= useState(0);
   const [Item, setItem]= useState(0);

//   const test= useMemo(function demo(){
//         console.log("hello");
//    },[])

const test=useMemo(function demo(){
    console.log("hello");
    
},[count]);

   const increase=()=>{
    setItem(Item+1);
   }
return(
    
    <>
    {test}
        <button onClick={()=>setCount((val)=>val+1)}>Count : {count}</button>
        <button onClick={increase}>Item : {Item}</button>
    </>
)
}
export default Increament;