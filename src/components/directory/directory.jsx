import CategoryItem from "../categories-item/categoryItem"
import "./categories.styles.scss"

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  )
}

export default Directory
