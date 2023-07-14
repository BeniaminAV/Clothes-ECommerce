import { signInWithGooglePopup } from "../../../utils/firebase"
import Button from "../../button/button"

const GoogleLogin = () => {
  const googleAuth = async () => {
    await signInWithGooglePopup()
  }

  return (
    <Button buttonType="google" onClick={googleAuth}>
      Google Sign In
    </Button>
  )
}

export default GoogleLogin
