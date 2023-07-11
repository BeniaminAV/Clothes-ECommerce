import {
  createUserDocumentForAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase"

const SignIn = () => {
  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    createUserDocumentForAuth(user)
  }

  return (
    <div>
      <h2>Sign in Page</h2>
      <button onClick={loginWithGoogle}>Sign in With Google</button>
    </div>
  )
}

export default SignIn
