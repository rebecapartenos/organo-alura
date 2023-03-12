import React, {Component} from "react";
import FormElement from "../FormElement/FormElement.js";
import DropDown from "../DropDown/DropDown.js";

import './Form.css'
import Button from "../Button/Button.js";

class Form extends Component{
    state = {
        nameColaborator: '',
        officeColaborator: '',
        imageColaborator: '',
        teamColaborator: ''
    };

    childrenCallback = (name, val) => {
        this.setState({[name]: val});
    }  

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
                                name = "name"
                                callback = {this.childrenCallback}
                                callbackVarName = {'nameColaborator'}
                            />                    
                            <FormElement 
                                labelName =  "Cargo:"
                                type = "text"
                                placeholder = "Digite seu cargo..."
                                name = "office"
                                callback = {this.childrenCallback}
                                callbackVarName = {'officeColaborator'}  
                            />                             
                            <FormElement
                                labelName = "Imagem:"
                                type = "url"
                                placeholder = "Digite o link da imagem..."
                                name = "image"
                                callback = {this.childrenCallback}
                                callbackVarName = {'imageColaborator'} 
                            />
                            <DropDown
                                labelName = "Time:"
                                itens = {["Suporte", "Comercial", "Marketing", "Infraestrutura", "Gestão", "Financeiro"]}
                                callback = {this.childrenCallback}
                                callbackVarName = {'teamColaborator'} 
                            />
                            <Button
                                label= "Criar card"
                                id= "btn-create-card"
                            />
                        </form>
                    
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Form;