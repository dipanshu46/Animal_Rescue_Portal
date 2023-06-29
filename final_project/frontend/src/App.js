
import React from 'react';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Sidebar from './components/Sidebar'; 
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Drop from './components/Drop'
 
function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/Drop" component={Drop} />
        <Route exact path="/About" component={About} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
