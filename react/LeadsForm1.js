//https://a39p50jbpf.execute-api.sa-east-1.amazonaws.com/prod/
import React, { Component } from "react";
import axios from "axios";
import { useCssHandles } from "vtex.css-handles"

import "./index.css"

const CSS_HANDLES = ["nameInput","emailInput","formStyle","btnSend"]


class leadsForm extends Component {

    
    state = {
    name: "",
    email: ""
  };

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email
    };
    axios
      .post("https://a39p50jbpf.execute-api.sa-east-1.amazonaws.com/prod", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  
  
  
  render() {
    const handles = useCssHandles(CSS_HANDLES)
    
    
    return (
      
      <div>
        <form className={`${handles.formStyle}`} onSubmit={this.handleSubmit}>
          <input
            className={`${handles.nameInput}`}
            placeholder="Digite seu nome" value={this.state.name}
            onChange={this.onNameChange} required
          />
          <input
            className={`${handles.emailInput}`}
            placeholder="Digite seu email" value={this.state.email}
            onChange={this.onEmailChange} required
          />
          <button
          className={`${handles.btnSend}`}
          type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default leadsForm;