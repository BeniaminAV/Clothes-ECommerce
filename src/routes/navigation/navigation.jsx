import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import LogoCrown from "../../components/logo/logo"
import "./navigation.scss"
import LinkRouter from "../../components/Link/Link"
import { UserContext } from "../../context/user.context"
import { signOutUser } from "../../utils/firebase"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <Fragment>
      <div className="navigation">
        <LogoCrown />
        <div className="nav-links-container">
          <LinkRouter label="SHOP" to="/shop" />
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <LinkRouter label="SIGN IN" to="/auth" />
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
