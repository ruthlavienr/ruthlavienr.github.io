import React from "react";
import NavBarList from "./components/NavBarList.js";
import CardsList from "./components/CardsList.js";
import './App.css';

const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Groceries", url: "#", id: 2 },
  { name: "Gadgets", url: "#", id: 3 },
  { name: "Clothing", url: "#", id: 4 },
];

const cards = [
  { name: "Cellphone", url: "https://img.lazcdn.com/g/p/171982adf773d0ba13a30dc9af8c48be.jpg_720x720q80.jpg", btnName: "Add to cart", id: 1 },
  { name: "Wallet", url: "https://costal.ph/cdn/shop/files/classic-men_s-wallet_grande.jpg?v=1697596039", btnName: "Add to cart", id: 2 },
  { name: "Toy", url: "https://i.ebayimg.com/images/g/LMgAAOSwaeZkUYFP/s-l1200.webp", btnName: "Add to cart", id: 3 },
  { name: "Clothing", url: "https://i.pinimg.com/236x/af/7c/3e/af7c3e8da257f2ba01d01828ab484e44.jpg", btnName: "Add to cart", id: 4 },
  { name: "Pillow", url: "https://www.ikea.com/ph/en/images/products/vildkorn-pillow-high__0789297_pe763924_s5.jpg", btnName: "Add to cart", id: 5},
  { name: "Laptop", url: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg", btnName: "Add to cart", id: 6 },
  { name: "Mouse", url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mouse/d/l/l/wired-usb-gaming-mouse-with-breathing-lights-and-dpi-upto-3600-original-imagg6btapfaxtzh.jpeg?q=90&crop=false", btnName: "Add to cart", id: 7 },
  { name: "Towel", url: "https://ph-test-11.slatic.net/p/f47b2f16884ea7bf76b081b57ea8fd82.jpg", btnName: "Add to cart", id: 8 },
  { name: "Shampoo", url: "https://assets.unileversolutions.com/v1/41760797.png", btnName: "Add to cart", id: 9 },
  { name: "Sofa", url: "https://ourhome.ph/cdn/shop/products/seiv-2-seater-sofa_10402171-_7_6d05811f-4f38-4345-9948-206d062f9847_2400x.jpg?v=1679984460", btnName: "Add to cart", id: 10 },
  { name: "Conditioner", url: "https://naturerepublic.com.ph/cdn/shop/files/ArganEssentialDeeoCareConditioner.jpg?v=1713320618", btnName: "Add to cart", id: 11 },
  { name: "Battery", url: "https://makerselectronics.com/wp-content/uploads/2023/05/253790_XL1_20230712-1600x1600.jpg", btnName: "Add to cart", id: 12 },
];

function App() {
  return (
    <div className="App">
      <NavBarList attri={menus} title={"Lazado"}/>      

      <CardsList data={cards} title={cards.name}/>
    </div>
  );
}

export default App;
