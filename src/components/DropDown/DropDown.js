import React, { Component } from 'react'

export default class DropDown extends Component {

    state ={
        choosenRes: ''
    }

    handleChange = name => event => {
        this.props.callback(this.props.callbackVarName, event.target.value)
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <label className="form-label">{this.props.labelName}</label>
                <select className='form-input' onChange={this.handleChange('choosenRes')}>
                    {this.props.itens.map(item => {return <option key={item}>{item}</option>})}
                </select>
            </div>
        )
    }
}
