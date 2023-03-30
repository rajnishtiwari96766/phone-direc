import React,{Component} from "react";
import Addsubscriber from "./Addsubscriber";
import Showsubscribers from "./Showsubscribers";
import {BrowserRouter as Router,Route} from 'react-router-dom'

class Phonedirectory extends Component{

    constructor(){
        super();
        this.state={
            //list of all the subscribers will be accessed from this smart component
            subscriberslist:[
                {
                    id:1,
                    name:'Rajjo',
                    phone:'99999999999'
                }, 
                {
                    id:2,
                    name:'goluuuuu',
                    phone:'88888888888'
                }
            ] 
        }
    }
    deletesubscriberhandler=(subscriberId)=>{
        let subscribersList=this.state.subscriberslist;
        let subscriberIndex=0;
        subscribersList.forEach(function(subscriber,index){
            if(subscriber.id===subscriberId){
                subscriberIndex=index;
            }
        },this);
        let newSubscribers=subscribersList;
        newSubscribers.splice(subscriberIndex,1);
        this.setState({subscribers:newSubscribers});
    }

    addsubscriberHandler=(newSubscriber)=>{
        let subscribersList=this.state.subscriberslist;
        if(subscribersList.length>0){
            newSubscriber.id=subscribersList[subscribersList.length-1].id+1;
        }else{
            newSubscriber.id=1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList:subscribersList});
       
    }
    render(){
        return(
            <Router>
                <div className="main-container">
                <Route exact path='/' render={(props)=> (<Showsubscribers {...props} subscriberslist={this.state.subscriberslist} deletesubscriberhandler={this.deletesubscriberhandler}/>)} />
                <Route exact path='/add' render={({history},props) => (<Addsubscriber history={history} {...props} addsubscriberHandler={this.addsubscriberHandler} />)}/>
                </div>
            </Router>
        )
    }
}
export default Phonedirectory;

