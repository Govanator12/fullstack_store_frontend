import React, { Component } from 'react';
import './index.css';
import DisplayForm from '../../components/displayForm';
import DisplayTable from '../../components/displayTable';

class InventoryPage extends Component {
  constructor() {
    super();
    this.state = {
      'products': []
    }
  }

  modifyProductAmount = async(id) => {

      let URL = 'http://localhost:5000/api/products/modify'

      let response = await fetch(URL, {
        hearders: {
          'Content-Type': 'application/json',
          'product_id': id
          'amount': amount
        }
      });

      let message = await response.json();

      if (message.success) {
        let products = this.state.Products

        for (let i in products) {
          if (products[i].id === id) {
            products[i].amount == amount;
            break;
          }
        }

        this.setState({ products });

        alert(`Product id: ${id} has been changed.`)
      } else {
        alert(`Something went wrong. We could not modify the product stock.`);
      }
  }

  render() {
    console.log(this.state.events);
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Display an Product</h1>
          <EditProductForm getEvents={this.getProducts} />
        </div>
        <div className="col-md-10 offset-md-1">
          <DisplayTable deleteProduct={this.deleteProduct} events={this.state.products} />
        </div>
      </div>
    );
  }
}

export default InventoryPage ;
