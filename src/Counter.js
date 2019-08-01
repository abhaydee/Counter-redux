import React,{Component} from 'react';
import {connect} from 'react-redux';
import { type } from 'os';
class Counter extends Component{
    increment=()=>{
        if(this.props.count===50){
            this.props.dispatch({type:"decrement"})
        }
        this.props.dispatch({type:"increment"})
    }

    decrement=()=>{
        this.props.dispatch({type:"decrement"})
    }
    render(){
        return(
            <div className="counter">
                <div className="box">
                    <button onClick={this.decrement}>-</button>
                    <span className="count">{this.props.count  }</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    count:state.count
});

export default connect(mapStateToProps)(Counter);