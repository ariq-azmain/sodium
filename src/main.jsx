import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import './css/animations.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Suspense fallback={<h1 className="text-yellow-400 text-7xl uppercase">Loading...</h1>}>
    <App/>
  </Suspense>
  </StrictMode>,
)
