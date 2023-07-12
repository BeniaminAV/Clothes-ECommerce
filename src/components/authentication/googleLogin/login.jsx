import {
  createUserDocumentForAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase"
import Button from "../../button/button"

const GoogleLogin = () => {
  const googleAuth = async () => {
    const { user } = await signInWithGooglePopup()

    await createUserDocumentForAuth(user)
  }

  return (
    <Button buttonType="google" onClick={googleAuth}>
      Google Sign In
    </Button>
  )
}

export default GoogleLogin
