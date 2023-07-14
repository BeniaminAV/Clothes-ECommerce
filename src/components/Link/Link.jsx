import { Link } from "react-router-dom"
import "./link.scss"

const LinkRouter = ({ label, to, onClick }) => {
  return (
    <Link className="nav-link" to={to} onClick={onClick}>
      <h3>{label}</h3>
    </Link>
  )
}

export default LinkRouter
