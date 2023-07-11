import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/home"
import Navigation from "./routes/navigation/navigation"
import SignIn from "./routes/auth/sign-in/sign-in"

const Shop = () => {
  return (
    <div>
      <h2>This is Shop Page</h2>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
