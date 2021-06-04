// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
    render () {
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}

export default DelayedButton;