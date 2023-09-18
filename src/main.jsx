import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import './main.css'
import Navbar from './components/navbar/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <Navbar />
  </React.StrictMode>,
)

// export default Main
