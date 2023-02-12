import React, { Component } from "react";
import Header from "./Header";

class Addsubscriber extends Component{

    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            phone:''
        }
    }

    inputChangeHandler=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(this.state); 
    }
    render(){
        const{name,phone}=this.state;
        return(
            <div>
                <Header heading="Add subscribers"></Header>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form">
                       
                        <label htmlFor="name" className="label-control">Name:</label><br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangeHandler}/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone:</label><br/>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangeHandler}/><br/><br/>

                        <div className="subcriber-info-container">
                            <span className="subscriber-to add-heading">Subcriber to be added</span><br/>
                            <span className="subscriber-info">Name: {name}</span><br/>
                            <span className="subscriber-info">Phone:{phone}</span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Addsubscriber;