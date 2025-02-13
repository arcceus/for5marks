import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BentoPortfolio from './Landing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BentoPortfolio />
  </StrictMode>,
)
