/*
Ruth Djusthine E. Tenifrancia
UV-3L

jsx file for navigation bar component
*/

import React from "react";
import NavBtn from "./NavBtn";

class NavBarList extends React.Component{

    render() {
        return(
            //html/jsx for navigation bar
            <ul>
                <li className="webTitle">{this.props.title}</li>
                <NavBtn attri={this.props.attri}/>
            </ul>          
        );
    }
}

export default NavBarList;