import React from "react";
import content from "./content"

function Icon(props){
    function transfer(){
        // console.log("click")
        const reqObj = content.find(obj => obj.id === props.id);
        reqObj.type = reqObj.type==="read"?"unread":"read";
        // console.log(reqObj);
    }

    return <div 
        className="icon"
        style={{backgroundColor:props.type==="read"?"red":"blue", width:10, height:10, display:"inline-block"}}
        onClick={transfer}
        ></div>
}

export default Icon;