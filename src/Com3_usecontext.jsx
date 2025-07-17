import React from 'react';
import { useContext } from "react";
import Usecontext from "./Usecontext";


const Com3_usecontext =()=>{

 var demo= useContext(Usecontext);

    return(
        <>
            {/* <h1>component: {demo} </h1>  */}
            <h1>hello</h1>
        </>
    )
}

export default Com3_usecontext;