import { createContext, useState, useEffect } from "react"

import { getCategoriesAndDocuments } from "../utils/firebase.js"

export const CategoryContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}
