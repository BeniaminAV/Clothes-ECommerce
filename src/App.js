import { Routes, Route } from "react-router-dom"
import { Home, Shop, Navigation, Authentication, Cart } from "./routes/index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
