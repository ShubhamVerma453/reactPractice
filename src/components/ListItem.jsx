import React from "react";
import Icon from "./Icon"

function ListItem(props){
    return <li>{props.name} <Icon type={props.type} id = {props.id}/> </li>
}

export default ListItem;