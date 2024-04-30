/*
Ruth Djusthine E. Tenifrancia
UV-3L

jsx file for navigation bar component
*/

import React from "react";
import NavBtn from "./NavBtn";

function NavBarList(props) {
    return (
        //html/jsx for navigation bar
        <ul>
            <li className="webTitle">{props.title}</li>
            <NavBtn attri={props.attri}/>
        </ul>
    );
}

export default NavBarList;
