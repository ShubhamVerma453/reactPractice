import React, {useState} from "react";
import ListItem from "./ListItem"
import content from "./content"

function App (){

    const[hookData, hookFun] = useState("all");

    const change = (event) => {
        hookFun(event.target.value);
    };

    return <div>
        
        <select name="dropdown" id="state" onChange={change}>
        <option value="all">All</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
        </select>

        <ul>
            {content.map(data=>{
                if(hookData==="all"){
                    return <ListItem 
                    name = {data.name}
                    key = {data.id}
                    type = {data.type}
                    id = {data.id}
                    />
                }
                else if(data.type===hookData){
                return <ListItem 
                    name = {data.name}
                    key = {data.id}
                    type = {data.type}
                    id = {data.id}
                    />
                }
            })}
        </ul>
        </div>
}

export default App;