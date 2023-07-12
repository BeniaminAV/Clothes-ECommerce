import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import LogoCrown from "../../components/logo/logo"
import "./navigation.scss"
import LinkRouter from "../../components/Link/Link"

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <LogoCrown />
        <div className="nav-links-container">
          <LinkRouter label="SHOP" to="/shop" />
          <LinkRouter label="SIGN IN" to="/auth" />
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
