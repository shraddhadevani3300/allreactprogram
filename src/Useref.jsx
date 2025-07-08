import React from 'react';

import { useRef } from "react";

const Useref = () => {

    const name=useRef();
    const handleclick = () => {
        console.log(name.current.value)
    }
    return (


        <>
            <input type="text" ref={name}/>
            <button onClick={handleclick} >Click me</button>
        </>
    )
}

export default Useref;