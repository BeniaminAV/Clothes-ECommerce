import { Link } from "react-router-dom"
import { ReactComponent as LogoCrown } from "../../assets/logo.svg"
import "./logo.scss"

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="logo-container">
        <LogoCrown />
      </div>
    </Link>
  )
}

export default Logo
