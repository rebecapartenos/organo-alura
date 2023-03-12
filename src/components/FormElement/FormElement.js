import React, {Component} from "react";
import './FormElement.css'

class FormElement extends Component{
    state = {
        choosenRes: ''
    }

    handleChange = name => event => {
        this.props.callback(this.props.callbackVarName, event.target.value)
        this.setState({
            [name]: event.target.value
        });
    };


    render(){
        return(
            <div>
                <label className="form-label">{this.props.labelName}</label>
                <input placeholder={this.props.placeholder} name = {this.props.name} type = {this.props.type} className = "form-input" onChange={this.handleChange('choosenRes')}/>
            </div>
        );
    }

}
export default FormElement;