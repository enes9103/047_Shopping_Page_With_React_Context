import styles from "./Product.module.css";
import Cart from "../../Components/Cart";
import HomeScreen from "../../screens/HomeScreen";

const Products = () => {
  return (
    <div className={styles.productContainer}>
    <Cart />
    <HomeScreen />
    </div>
  );
};

export default Products;
