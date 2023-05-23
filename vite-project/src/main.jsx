import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/App.jsx'
import './index.css'

import {Layout} from "./Pages/components/Layout"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>

  </React.StrictMode>,
)
