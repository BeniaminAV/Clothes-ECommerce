import { useContext } from "react"
import { CategoryContext } from "../../context/category.context"
import Category from "../../components/categoryPreview/category"

const CategoryPreview = () => {
  const { categoriesMap } = useContext(CategoryContext)

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <Category key={title} title={title} products={products} />
      })}
    </>
  )
}

export default CategoryPreview
