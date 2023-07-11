import { Link } from "react-router-dom"
import "./link.scss"

const LinkRouter = ({ label, to }) => {
  return (
    <Link className="nav-link" to={to}>
      <h3>{label}</h3>
    </Link>
  )
}

export default LinkRouter
