// import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import user from "../assets/user.png";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <div className="web__icon">
        <i className="fa fa-solid fa-gifts fa-2x"></i>
        <i class="fa fa-solid fa-gem fa-2x"></i>
      </div>
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
      >
        Products
      </NavLink>
      <NavLink to="/user">
        <img src={user} alt="user" />
      </NavLink>
      <div className='nav__right'>
         <div className='cart__icon'>
           <i
             className='fa fa-shopping-cart'
             aria-hidden='true'
             onClick={showHideCart}
           />
           {cartItems.length > 0 && (
             <div className='item__count'>
               <span>{cartItems.length}</span>
             </div>
           )}
         </div>
      </div>
    </div>

  );
};

export default Nav;
