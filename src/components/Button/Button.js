import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {



    render() {
        return (
            <div>
                <button id={this.props.id} className='button'>{this.props.label}</button>
            </div>
        )
    }
}
