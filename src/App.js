import React from 'react';
import './App.css';
import Header from './components/header'
import { Switch, Route } from 'react-router-dom';
import CheckoutPage from './views/checkout'
import InventoryPage from './views/inventory'
import ProductsPage form './views/products'

class App() extends Component {
  render() {
    return (
      <div className = "App" >
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <ProductsPage />} />
            <Route exact path='/checkout' render={() => <CheckoutPage />} />
            <Route exact path='/inventory' render={() => <InventoryPage />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
