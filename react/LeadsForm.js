//https://a39p50jbpf.execute-api.sa-east-1.amazonaws.com/prod/

import React, {useState} from "react"
import axios from "axios";
import { useCssHandles } from "vtex.css-handles"

import "./index.css"

const CSS_HANDLES = ["nameInput","emailInput","formStyle","btnSend"]


const leadsForm = () => {
   const [name,setName]=useState("")
   const [email,setEmail]=useState("")

   const handles = useCssHandles(CSS_HANDLES)    
     

  
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: setName,
      email: setEmail
    };
    axios
      .post("https://a39p50jbpf.execute-api.sa-east-1.amazonaws.com/prod", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

   
   
    return (
        <div>
        <form className={`${handles.formStyle}`} onSubmit={handleSubmit}>
          <input
            type="text" name="name"
            className={`${handles.nameInput}`}
            placeholder="Digite mseu " value={name}
            onChange={(e)=>setName(e.target.value)} required
          />
          <input
          type="text" name="email"
            className={`${handles.emailInput}`}
            placeholder="Digdkite seu email" value={email}
            onChange={(e)=>setEmail(e.target.value)} required
          />
          <button
          className={`${handles.btnSend}`}
          type="submit">Enviar</button>
        </form>
      </div>
    )
}

export default leadsForm