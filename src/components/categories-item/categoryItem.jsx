const CategoryItem = ({ category: { imageUrl, title, id } }) => {
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop</p>
      </div>
    </div>
  )
}

export default CategoryItem
