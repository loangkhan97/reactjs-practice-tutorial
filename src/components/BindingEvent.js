import React, { Component } from 'react'

export default class BindingEvent extends Component {

    constructor(){
        super();
       // this.HandleEvent = this.HandleEvent.bind(this)
        this.state={
            name:"Loang"
        }
    }

   

   
    HandleEvent (){
        this.setState({
            name:"khan"
        })
    }

    //-------arrow function-------------//
        //with arrow function we will not use bind keyword
    // HandleEvent = () => {
    //     this.setState({
    //         name:"khan"
    //     })
    // }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button type='button' onClick={ () => this.HandleEvent()}>Click</button>
        {/* <button type='button' onClick={this.HandleEvent}>Click</button> */}
        {/* <button type='button' onClick={this.HandleEvent.bind(this)}>Click</button> */}
        {/* <button type='button' onClick={this.HandleEvent}>Click</button> */}
      </div>
    )
  }
}
