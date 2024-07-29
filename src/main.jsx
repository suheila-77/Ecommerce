import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import Header from './Components/Header'
// import ProductList from './Components/ProductList'
// import Tasbiih from './Components/Tasbiih'
// import store from './redux/store/Store'
import ProductList from './Components/ProductList'
import { Provider } from 'react-redux'
import index from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import Cart from './Pages/Cart'

ReactDOM.createRoot(document.getElementById('root')).render(
<div>
{/* <Provider store={store}>
<Tasbiih/>

</Provider> */}

<Provider store={index}>
    <BrowserRouter>
    {/* <Cart/> */}
  <App/>
  </BrowserRouter>
</Provider>

</div>

)
