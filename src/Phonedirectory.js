import React,{Component} from "react";
import Addsubscriber from "./Addsubscriber";

class Phonedirectory extends Component{

    constructor(){
        super();
        this.state={
            //list of all the subscribers will be accessed from this smart component
            subscriberslist:[] 
        }
    }

    addsubscriber=(newsubscriber)=>{
        let subsribersList=this.state.subscriberslist;
        if(subsribersList.length>0){
            newsubscriber.id=subsribersList[subsribersList.length-1].id+1;
        }else{
            newsubscriber.id=1;
        }
        subsribersList.push(newsubscriber);
        this.setState({subsribersList:subsribersList});
        console.log(this.subscriberslist);
    }
    render(){
        return(
            <Addsubscriber/>
        )
    }
}
export default Phonedirectory;