/*
Ruth Djusthine E. Tenifrancia
UV-3L

parent component
*/

import React from 'react'
import NavBarList from "./NavBarList.js";
import CardsList from "./CardsList.js";
import ShopCartList from "./ShopCartList.js";

class HomePage extends React.Component {
    constructor(props) { 
        super(props)

        this.state = {
            cartItems: []   //initial list for cart Items
        }

        this.addToCart = this.addToCart.bind(this)
        this.deleteToCart = this.deleteToCart.bind(this)
    }

    addToCart(item) {
        //triggered every time the add to cart button is clicked
        
        const cartItemsIndex = this.state.cartItems.findIndex(cartItem => cartItem.id === item.id);
    
        if (cartItemsIndex !== -1) { //if the item already exists, just add the quantity
            const updtCartItems = this.state.cartItems.map((cartItem, index) => {
                if (index === cartItemsIndex) {
                    return {
                        ...cartItem,
                        qty: cartItem.qty + 1
                    };
                } else {
                    return cartItem;
                }
            });
    
            this.setState({ cartItems: updtCartItems });
        } else { //add the item on the list
            const updtCartItems = [...this.state.cartItems, { ...item, qty: 1 }];
            this.setState({ cartItems: updtCartItems });
            console.log(`Added ${item.name} to the cart`);
        }
        
    }
    

    deleteToCart(item){
        //triggered every time the 'X' button is clicked
        const updatedCartItems = this.state.cartItems.filter(cartItem => cartItem !== item);
        this.setState({ cartItems: updatedCartItems });
        console.log(`Deleted ${item.name} to the cart`);
    }

    render(){
        const {menus, cards} = this.props;
        return (
            <div className="App">
              <NavBarList attri={menus} title={"Lazado"}/>      
              <CardsList data={cards} title={cards.name} addToCart={this.addToCart}/>
              <ShopCartList data={this.state.cartItems} title={cards.name} shopCartTotal={this.state.cartItems.length} deleteToCart={this.deleteToCart}/>
            </div>
          );
    }
}

export default HomePage;