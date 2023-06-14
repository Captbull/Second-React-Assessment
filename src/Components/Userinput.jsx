import React from "react"

// syntax to create input component, please use the imput field on the page to enter a new username
const Userinput = (props) =>{
    return (
        <div className="wrapper">
        <label htmlFor="input"></label>
        <input onChange={props.change} className="input" type="text"/>
        </div>
    )
}


export default Userinput;

