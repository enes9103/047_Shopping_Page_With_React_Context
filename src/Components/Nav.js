// import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import user from "../assets/user.png";
import logo from "../assets/logo.png";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <div className={styles.webIcon}>
        <img src={logo} alt="logo" className={styles.logo} />
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
      <Link
        to="/user">
        <img src={user} alt="user" className={styles.userImg} />
      </Link>
      <div className="nav__right">
        <div className={styles.cart__icon}>
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className={styles.item__count}>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
