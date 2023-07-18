import './directory.scss'

const CategoryItem = ({ category: { imageUrl, title, id } }) => {
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop</p>
      </div>
    </div>
  )
}

export default CategoryItem
