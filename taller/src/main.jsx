import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactForm from './components/compoContact.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='formContact'>
    <ContactForm />
    </div>
  </StrictMode>,
)
