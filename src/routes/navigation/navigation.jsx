import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import LogoCrown from "../../components/logo/logo"
import "./navigation.scss"
import LinkRouter from "../../components/Link/Link"
import { signOutUser } from "../../utils/firebase"
import CartIcon from "../../components/cartIcon/cartIcon"
import CartDropDown from "../../components/cartDropDown/dropDown"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from "../../store/cart/cart.selector"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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
          <LinkRouter label={<CartIcon />} />
        </div>
      </div>
      {isCartOpen && <CartDropDown />}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
