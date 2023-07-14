import { signInWithGooglePopup } from "../../../utils/firebase"
import Button from "../../button/button"
import { toast } from "react-hot-toast"

const GoogleLogin = () => {
  const googleAuth = async () => {
    await signInWithGooglePopup()
    toast.success("Logged in!")
  }

  return (
    <Button buttonType="google" onClick={googleAuth}>
      Google Sign In
    </Button>
  )
}

export default GoogleLogin
