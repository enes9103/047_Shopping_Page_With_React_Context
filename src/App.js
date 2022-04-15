import Nav from "./Components/Nav";import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Product/Products";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/user" exact element={<User />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
