import React from 'react';
import { useState} from "react";

const Messagebox = () => {
  const [msg, setmsg] = useState(false);
  const showmsg = () => {
    setmsg((val) => !val);
  };
  return (
    <>
      <button onClick={showmsg}>{msg ? "msg close" : "msg show"}</button>
      <br />

      {msg && (
        <div
          style={{
            padding: "10px",
            border: "1px solid black",
            margin: "5px",
            background: "black",
            color:"white"
          }}
        >
        <h4>This Is Messagebox</h4>  
        </div>
      )}
    </>
  );
};
export default Messagebox;
