import React from 'react';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default class Article extends Component {
  constructor(props) {
      super(props);
      this.state = {
      selectedProducts: [],
      i:0,
      products: [],
      productsIsLoaded: false,
    };
  }
  componentDidMount() {
    // fetch('https://fakestoreapi.com/products")
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json => {
        this.setState({
        productsIsLoaded: true,
        products: json,
        })
      }
    )
  }
  render() {
    var { productsIsLoaded, products} = this.state;
    var addToPanier = event =>{
      this.setState({
        i:this.state.i+1,
        selectedProducts: this.state.selectedProducts.push(event.currentTarget.id)
      });
      console.log(this.state.selectedProducts);
    }
    if(!productsIsLoaded) {
      return <div>Loading ...</div>;
    }
    else {
      return (
        <CardGroup>
          {products.slice(4,8).map(product =>(
          <Card style={{ width: '18rem' }} id={product.id} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description.slice(0,50)}<a></a>
              </Card.Text>
              <Card.Text>
              {product.price}
              </Card.Text>
              <Card.Text>
              {product.category}
              </Card.Text>
              <Button id={product.id} variant="primary" onClick={addToPanier}>Acheter</Button>
            </Card.Body>
          </Card>
          ))}
        </CardGroup>
      )
    }
  }
}