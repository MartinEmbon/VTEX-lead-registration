import React from "react"
import { useCssHandles } from "vtex.css-handles"
import "./btnWhatsapp.css"
import whatslogo from "./whatslogo.png"
const CSS_HANDLES = ["btnWhatsapp"]

const btnWhatsapp = () => {
    
    const handles = useCssHandles(CSS_HANDLES)        
    
    return(
        <>
        <a className={`${handles.btnWhatsapp}`} 
            href="https://api.whatsapp.com/send?phone=55551195073238&text=Ola!%20gostaria%20de%20saber%20uma%20coisa..."
            target="_blank">
                
            <img src={whatslogo} alt="whatsappLogo" />
        </a>
        </>
    )
}

export default btnWhatsapp