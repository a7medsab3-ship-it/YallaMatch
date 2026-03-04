import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <Toaster position="top-right" toastOptions={{
                duration: 4000,
                style: {
                    background: '#171717',
                    color: '#f4f4f5',
                    border: '1px solid #27272a'
                }
            }} />
            <App />
        </HelmetProvider>
    </React.StrictMode>,
)
