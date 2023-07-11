import Directory from "./components/directory/directory"
import categories from "./data/categoryData"
import "./scss/categories.styles.scss"

function App() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  )
}

export default App
