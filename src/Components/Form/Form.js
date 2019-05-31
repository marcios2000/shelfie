import React, {Component} from 'react';
import axios from "axios"



class Form extends Component {
    constructor(props) {
        super(props);

        this.state ={
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
             
              <div className="form">
                <form onSubmit={e => {
            
            axios
              .post("/api/inventory", {
                name: this.state.inventory.name,
                price: this.state.inventory.price,
                image: this.state.inventory.image
                

              })
              .then(response => {
                console.log(response.data);
                this.props.changeView("inventory")
              })
              .catch(error => {
                console.log(error);

              });
          }} className="addProduct">
                <img src="https://s7d4.scene7.com/is/image/JCPenney/DP0511201717035641M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" />
                <div>Image URL:</div>
                <input />
                <div>Product Name</div>
                <input name="name" onChange={this.handleChange}/>
                <div>Price</div>
                <input name ="price" onChange={this.handleChange}/>
                <div>
                <button type="reset">Cancel</button>
                <button type="submit">Add to inventory</button>
                

                </div>
                </form>
                </div>
                
                <div>
       
        
      </div>
      
      

            </div>
        )

    
    }    
    }
   


    


export default Form;