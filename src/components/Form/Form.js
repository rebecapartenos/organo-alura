import React, {Component} from "react";
import FormElement from "../FormElement/FormElement.js";
import DropDown from "../DropDown/DropDown.js";

import './Form.css'

class Form extends Component{
    state = {

    };

    render(){
        return(
            <div>
                <div className="form-card">
                    <div className="form-content">
                        <div>
                            <h2 className = "form-text">Preencha os dados para criar o card do colaborador.</h2>
                        </div>
                        <form className="form-element-content">
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
                                labelName = "Imagem:"
                                type = "url"
                                placeholder = "Digite o link da imagem..."
                                name = "image"
                            />
                            <DropDown
                                labelName = "Time:"
                                itens = {["Suporte", "Comercial", "Marketing", "Infraestrutura", "Gestão", "Financeiro"]}
                            />
                        </form>
                    
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Form;