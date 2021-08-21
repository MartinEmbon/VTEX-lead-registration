import React from "react"
import axios from 'axios';
import { useCssHandles } from "vtex.css-handles"
import "./btnGetLeads.css"


const CSS_HANDLES = ["btnLeads","btnReturn"]


const showLeads = () => {
    
    const handles = useCssHandles(CSS_HANDLES)    

    const handleReturn = () => {
        window.location = "https://martinfierro--hiringcoders2021.myvtex.com/"

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.get('https://a39p50jbpf.execute-api.sa-east-1.amazonaws.com/prod/products')
        .then((response)=>{
             const db = response.data.products;
             console.log(db)
        })
        .catch(function (error) {
            console.log(error);
        });
                
            }
    
    return(
        <>
        <button 
        className={`${handles.btnLeads}`}
        onClick={handleSubmit} type="submit">
            Mostrar Leads
            </button>
        <button 
        className={`${handles.btnReturn}`}
        onClick={handleReturn} type="submit">
            Homepage
            </button>
        </>
    )
}

export default showLeads