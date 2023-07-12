import "./login.scss"
import { useState } from "react"
import FormInput from "../../formInput/Input"
import Button from "../../button/button"
import GoogleLogin from "../googleLogin/login"
import { signInAuthUserWithEmailAndPassword } from "../../../utils/firebase"

const defaultFormFields = {
  email: "",
  password: "",
}

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields()
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit" onClick={() => {}}>
            Sign In
          </Button>
          <GoogleLogin type="button" />
        </div>
      </form>
    </div>
  )
}

export default Login
