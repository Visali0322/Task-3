// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/menu"
            render={(props) => <Menu {...props} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            render={(props) => (
              <Cart {...props} cart={cart} removeFromCart={removeFromCart} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;