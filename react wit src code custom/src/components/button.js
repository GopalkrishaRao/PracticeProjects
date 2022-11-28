// import React from "react"

function Button({title="I am a button",linke ="default", externallink="#"}) {
    return(
        <>     
        <a href={externallink} target="blank">{linke}</a>
        <button style={{padding:"20px"}}>{title}</button>
        </>

    )

};

export default Button