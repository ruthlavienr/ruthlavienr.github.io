import React from "react";

//if function, no need for render menthod
//if as a class, we have to have a render method
class NavBarList extends React.Component{

    //props: property of every react component
    render() {

        const lists=this.props.attri
        return(
            <ul>
                <li className="webTitle">{this.props.title}</li>
                {
                    lists.map((list, index) => {
                        return <li key={index}><a href={list.url}>{list.name}</a></li>
                    })
                }
            </ul>          
        );
    }
}

export default NavBarList;