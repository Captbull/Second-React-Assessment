import React from "react";

// syntax to create Useroutput component
const Useroutput = ({userName}) => {
    return(
        <div>
            <h1>My Name is {userName}</h1>
            <p>I live under suburban skies where life is bleeding, with concrete gray skies, and  plenty of room for dreaming... </p>

            <strong>*Enter new User Name*</strong>
        </div>
    )
}

export default Useroutput;

//please use readme.md