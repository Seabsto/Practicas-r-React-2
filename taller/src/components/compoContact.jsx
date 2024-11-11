import { useState} from "react"
import React from "react"
import "../assets/styles/form.css"

function ContactForm(){
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const handleChange = (e) =>{
            const {name, value} = e.target;setFormData({
                ...formData,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`Datos enviados:\nNombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.message}`)

        setFormData({ name:'', email:'', message:''})
    }

    return <div className="container">   
        <h2>Formulario de contacto</h2><br />
        <form onSubmit={handleSubmit}>   
        <label> Nombre: <input type="text" name="name" value={formData.name} onChange={handleChange}   /> <br /> </label> <br />
        <label> Correo: <input type="email" name="email" value={formData.email} onChange={handleChange}  />  <br /> </label><br />
        <label> Mensaje: <input type="text" name="message" value={formData.message} onChange={handleChange}  /> <br /> </label>
        <button type="submit">Enviar</button>
        </form>
    </div>
} 

export default ContactForm