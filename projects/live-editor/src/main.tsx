import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import LiveEditor from './features/LiveEditor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LiveEditor />
  </StrictMode>,
)
