/*
Ruth Djusthine E. Tenifrancia
UV-3L

jsx file for navigation bar component
*/

import React from "react";

class NavBarList extends React.Component{

    render() {
        //variable for cards list
        const lists=this.props.attri
        return(
            //html/jsx for navigation bar
            <ul>
                <li className="webTitle">{this.props.title}</li>
                {
                    lists.map((list, index) => { //for each clickable elements of the navbar menu
                        return <li key={index}><a href={list.url}>{list.name}</a></li>
                    })
                }
            </ul>          
        );
    }
}

export default NavBarList;