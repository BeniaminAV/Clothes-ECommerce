import React from "react"
import ReactDOM from "react-dom/client"
import "./scss/index.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./context/user.context"
import ToastProvider from "./context/toast.context"
import { ProductProvider } from "./context/product.context"
import { CartProvider } from "./context/cart.context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
            <ToastProvider />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
