import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Blog } from "./pages/Blog/blog";
import { Home } from "./pages/home/home";
import { Footer } from "./components/footer";
import { ShopContextProvider } from "./context/shop-context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path="/simple_ecommerce" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
