import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import LogoCrown from "../../components/logo/logo"
import "./navigation.scss"
import LinkRouter from "../../components/Link/Link"
import { signOutUser } from "../../utils/firebase"
import { UserContext } from "../../context/user.context"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <Fragment>
      <div className="navigation">
        <LogoCrown />
        <div className="nav-links-container">
          <LinkRouter label="SHOP" to="/shop" />
          {currentUser ? (
            <LinkRouter label="SIGN OUT" onClick={signOutUser} />
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
