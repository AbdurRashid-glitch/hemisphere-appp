import React from "react";
import HemisphereDisplay from "./HemisphereDisplay"



class App extends React.Component{
   /* constructor(props) {
        super(props);
        this.state = {
            latitude:null,
            errorMessage: ""
        }  
    }*/

    state = {
        latitude: null,
        errorMessage: ''
    }



     // good palce to data loading & network Calls
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) =>{
                console.log(position);
                this.setState({latitude: position.coords.latitude})
            } , 
            (error )=> {
                console.log(error);
                this.setState({errorMessage: error.message})
            }
            
            
        );
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }


    render()
    {
      if(this.state.latitude &&  !this.state.errorMessage )
      {
          return<div> <HemisphereDisplay latitude={this.state.latitude}/> </div>
      }
      if(this.state.errorMessage && !this.state.latitude )
      {
          return <div> {this.errorMessage} </div>
      }
      else{
          return <div>Loading...</div>
      }
     }
}
export default App;