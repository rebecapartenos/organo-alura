import React, {Component} from "react";
import './FormElement.css'

class FormElement extends Component{
    state = {

    }

    render(){
        return(
            <div>
                <label className="form-label">{this.props.labelName}</label>
                <input placeholder={this.props.placeholder} name = {this.props.name} type = {this.props.type} className = "form-input"/>
            </div>
        );
    }

}
export default FormElement;