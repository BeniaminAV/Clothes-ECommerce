import "./authentication.scss"
import Login from "../../components/authentication/login/login"
import SignUpForm from "../../components/authentication/register/signUp"

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Login />
      <SignUpForm />
    </div>
  )
}

export default Authentication
