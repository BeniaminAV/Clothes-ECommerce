import Directory from "../../components/directory/directory"
import categories from "../../data/categoryData"

function Home() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  )
}

export default Home
