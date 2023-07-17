import { Routes, Route } from "react-router-dom"
import { Home, Shop, Navigation, Authentication,  CheckOut } from "./routes/index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  )
}

export default App
