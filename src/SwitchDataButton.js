import React, { Component } from "react"

export class SwitchDataButton extends Component{

constructor(props){
super(props);


}


render(){
return (<button onClick={this.props.handleClick}>{this.props.title}</button>)
}

}

export default SwitchDataButton;