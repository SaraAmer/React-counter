import './App.css';
import React from 'react';

class App extends React.Component {

  render()
  {
  return (
    <div className="App">
   <Counter initCounter ={0}/>
    </div>
  );}
}
class Counter extends React.Component{
  constructor(props)
  {
    super();
    this.state={
      counter : props.initCounter,
    }
  }
  increment=()=>{
  
    this.state.counter=this.setState({counter:this.state.counter+1});
  }
  decrement=()=>{
    
    this.state.counter=this.setState({counter:this.state.counter-1});
  }

  render(){
    let style={
      
      margin:"auto",
      marginTop:"30px",
    };
    return (
   <div > 
   <div style={style}>
   <button onClick={this.decrement} style={{cursor:"pointer"}} >
     -
   </button>
   <span style={{padding:"20px",}}>
   {this.state.counter}
   </span>
   <button onClick={this.increment} style={{cursor:"pointer"}}>
    +
   </button>
   </div>
   </div>  
    );
  }
 
}

export default App;
