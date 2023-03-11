import React, { Component } from 'react'

export default class DropDown extends Component {

    render() {
        return (
            <div>
                <label className="form-label">{this.props.labelName}</label>
                <select className='form-input'>
                    {this.props.itens.map(item => {return <option key={item}>{item}</option>})}
                </select>
            </div>
        )
    }
}
