import React, {Component} from 'react';
import axios from "axios"



class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state ={
            
            inventory: [{
              name: "shoe",
              price: 45,
              image: "https://s7d4.scene7.com/is/image/JCPenney/DP0511201717035641M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2"
          },
          {
              name: "hat",
              price: 20,
              image: "https://www.rei.com/media/product/631470"

          }]


        };
      
    }
   componentDidMount() {
       axios.get("/api/inventory").then(response => {
           this.setState({inventory: response.data, loading: false});
       }).catch(error => {
           console.log(error);
           this.setState({loading: false, error: "Error Occured"})
       })
   }

    render() {
        const{inventory} = this.state;
        return(
            <div>
             {this.state.loading ? <p>Loading......</p>: null}
             
             {inventory.map(inventoryItem => (
                 <article>
                     <div className="nameprice">
                         <div><img src={inventoryItem.image}/></div>
                         
                         
                         
                             <div>{inventoryItem.name}
                             {inventoryItem.price}</div>

                             <button>Delete</button>
                             <button>Edit</button>
                         



                     </div>
                
                </article>
                
             ))}
              
                <div>
       
        
      </div>
      
      

            </div>
        )

    
    }    
    }
   


    


export default Dashboard;