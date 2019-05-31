import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form'
import "./App.css"
import axios from "axios"

class App extends Component {
    constructor(props) {
        super(props);

        this.state ={
            imageURL: [],
            productName: [],
            price: [],
            inventory: [{
              name: "shoe",
              price: 45,
              image: "https://s7d4.scene7.com/is/image/JCPenney/DP0511201717035641M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2"
          }]


        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    addUrl(newUrl) {
        this.setState({imageURL : newUrl});
    }

    addProduct(newProduct) {
        this.setState({productName: newProduct});
    }

    addPrice(newPrice) {
        this.setState({price: newPrice});
    }
    render() {
        return(
            <div>
              <header>
                <Header />
              </header>
<div>
              <div>
                <div>
                  <Dashboard />
                </div>
                <div>
                  <Form />
                </div>
                </div>




              </div>
       
      
      

            </div>
        )

    
    }    
    }
   


    


export default App;