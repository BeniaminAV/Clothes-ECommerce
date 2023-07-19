import Category from "../../components/categoryPreview/category"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/category/category.selectors"

const CategoryPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

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
