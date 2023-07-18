import React from "react"
import ReactDOM from "react-dom/client"
import "./scss/index.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./context/user.context"
import ToastProvider from "./context/toast.context"
import { CartProvider } from "./context/cart.context"
import { CategoriesProvider } from "./context/category.context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
            <ToastProvider />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
