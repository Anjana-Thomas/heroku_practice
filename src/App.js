import React, { Component } from 'react';
import "./App.css";
class App extends Component {
  state = { 
num:0
   } 

increment = ()=>{
     this.setState({num : this.state.num+1});
    }

decrement = ()=>{
     this.setState({num : this.state.num-1});
    }

  render() { 
    //var num=0;
    // function increment(){
    //   num=num+1;
    //   console.log(num);
    // }
    // function decrement(){
    //   num=num-1;
    //   console.log(num);
    // }
    return (
      <div className='App'>

<div className='showcase'>
  <h1>{this.state.num}</h1>
  <button onClick={this.increment}>ADD</button>
  <button onClick={this.decrement}>SUB</button>
</div>

</div>
    );
  }
}
 
export default App;

























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   var name  = "Anjana";
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// function New()
// {
//   return(

//   );
// }

// export default App;
//export {App,New};