/*
Ruth Djusthine E. Tenifrancia
UV-3L

jsx file for navigation button
*/

import React from "react";

class NavBtn extends React.Component {
    render() {
        // Variable for cards list
        const lists = this.props.attri;

        return (
            <>
                {lists.map((list, index) => (
                    // For each clickable element of the navbar menu
                    <li key={index}><a href={list.url}>{list.name}</a></li>
                ))}
            </>
        );
    }
}

export default NavBtn;
