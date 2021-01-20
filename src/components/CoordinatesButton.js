// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        let position = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(position)
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClick}> Coordinates </button>
            </div>
          )
    }
}