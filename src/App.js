import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import SignIn from './components/Auth/SignIn';
import New from './components/Items/New';
import Shoes from './components/Items/Shoes';
import Cloth from './components/Items/Cloth';
import Gloves from './components/Items/Gloves';
import Kitchen from './components/Items/Kitchen';
import Dashboard from './components/Auth/Dashboard';
import PostList from './components/Post/PostList';
import AddPost from './components/Post/AddPost';
import UpdatePost from './components/Post/UpdatePost';
import DeletePost from './components/Post/DeletePost';
import ProductPage from './components/ProductPage/ProductPage';
import Edit from './components/Post/Edit';
import Delete from './components/Post/Delete';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import { CartProvider } from './components/CartContext';
import { useState } from 'react';
import OrderList from './components/Post/OrderList';
import Orders from './components/Post/Orders';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="App">
      <CartProvider>
        <Navbar toggleCart={toggleCart} isCartOpen={isCartOpen} />

        <Routes>
          <Route path='/' element={<New />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} /> {/* Corrected route for Orders component */}

          <Route path='/shoes' element={<Shoes />} />
          <Route path='/cloth' element={<Cloth />} />
          <Route path='/glovs' element={<Gloves />} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/auth' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductPage toggleCart={toggleCart} />} />

          <Route path='/addpost' element={<AddPost />} />
          <Route path="/update/:id" element={<UpdatePost />} />
          <Route path="/delete/:id" element={<DeletePost />} />

          <Route path="/edit" element={<Edit />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>

        <Footer />
      </CartProvider >
    </div >
  );
}

export default App;
