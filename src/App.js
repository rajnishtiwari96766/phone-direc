// import logo from './logo.svg';
import './App.css';
import Header from "./Header";

import React, { Component } from "react";
import { render } from '@testing-library/react';


function App() {
  function deletehandler(message){
    alert(message);
  }


  // let subscirbers=[
  //   {
  //     id:1,
  //     name:"Rajnish Tiwari",
  //     phone:"***********"
  //   },
  //   {
  //     id:2,
  //     name:"Anvi aggarwal",
  //     phone:"***********"
  //   }
  // ]
  class App extends Component{
    constructor(){
      super();
      this.state={
        subscribersListToShow:[]
      }
      console.log("constructor called")
    }
    componentDidMount(){
      let newSubscriber={
        id:1,
        name:"Rajnish",
        phone:"8888888888"
      }
      let subsribersList=this.state.subscribersListToShow;
      subsribersList.push(newSubscriber);
      this.setState({subscribersListToShow:subsribersList});
      console.log("component did mount called")
    }
  
render(){
  console.log("render called")

  return (
    <div className='component-container'>
      <Header heading="Phone-directory" />
      <div className='component-body-container'>
    <button className='custom-btn add-btn'>ADD</button>

    <div className='grid-container heading-container'>
      <span className='grid-item name-heading'>Name</span>
      <span className='grid-item phone-heading'>Phone</span>
    </div>

   {
    this.state.subscribersListToShow.map(sub =>{
      return <div key={sub.id} className='grid-container'>
      <span className='grid-item'>{sub.name}</span>
      <span className='grid-item'>{sub.phone}</span>
      
      <span className='grid-item action-btn-container'>
      <button className='custom-btn delete-btn' onClick={()=> {deletehandler('delete clicked')}}>Delete</button>
      </span>
      </div>
    })
   }
      </div>
      </div>
  );
}
}
}

export default App;
