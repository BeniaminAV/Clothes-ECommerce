import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import LogoCrown from "../../components/logo/logo"
import "./navigation.scss"
import LinkRouter from "../../components/Link/Link"
import { signOutUser } from "../../utils/firebase"
import { UserContext } from "../../context/user.context"
import CartIcon from "../../components/cartIcon/cartIcon"
import CartDropDown from "../../components/cartDropDown/dropDown"
import { CartContext } from "../../context/cart.context"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  const { isCartOpen } = useContext(CartContext)

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
