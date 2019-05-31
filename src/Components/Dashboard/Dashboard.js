import React, {Component} from 'react';



class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state ={
            


        };
    }
    render() {
        return(
            <div>
                {this.props.inventory.image}
                {this.props.inventory.name}
                {this.props.inventory.price}

            </div>
        )
    }
   

  
    
}

export default Dashboard;
