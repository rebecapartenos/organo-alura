import React, {Component} from "react";
import FormElement from "../FormElement/FormElement.js";

import './Form.css'

class Form extends Component{
    state = {

    };

    render(){
        return(
            <div className="form-div">
                <div className="form-card">
                    <div className="form-content">
                        <div>
                            <p form-text>Preencha os dados para criar o card do colaborador.</p>
                        </div>
                        <form>
                            <FormElement 
                                labelName =  "Nome:"
                                type = "text"
                                placeholder = "Digite seu nome..."
                                name = "name"/>
                            <FormElement 
                                labelName =  "Cargo:"
                                type = "text"
                                placeholder = "Digite seu cargo..."
                                name = "office"/>
                            <FormElement 
                                labelName =  "Imagem:"
                                type = "text"
                                placeholder = "Informe o endereço da imagem..."
                                name = "image"/>
                            <FormElement 
                                labelName =  "Time"
                                type = "text"
                                placeholder = "Digite seu nome..."
                                name = "time"/>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Form;