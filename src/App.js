import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import {
  Home,
  Shop,
  Navigation,
  Authentication,
  CheckOut,
} from "./routes/index"

import { setCurrentUser } from "./store/user/user.action"
import { useDispatch } from "react-redux"
import { createUserDocumentForAuth, onAuthStateChangedListener } from "./utils/firebase"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentForAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  )
}

export default App
