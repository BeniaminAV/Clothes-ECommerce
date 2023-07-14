import React from "react"
import ReactDOM from "react-dom/client"
import "./scss/index.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./context/user.context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
