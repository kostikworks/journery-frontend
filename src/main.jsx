import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

const ClIENT_ID = "1095157099365-9clqgqhj1h8grkcb8h5093gd8t581l01.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={ClIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
