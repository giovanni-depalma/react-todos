import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './store'

let Root = () =>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>

if(import.meta.env.VITE_SERVICE_IMPL === "redux"){
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}><Root /></Provider>,
  )
}
else{
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Root />,
  )
}
