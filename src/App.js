import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/home"
import Navigation from "./routes/navigation/navigation"
import Authentication from "./routes/auth/authentication"

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
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
