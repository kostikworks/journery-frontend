import { useGoogleSignIn } from '../hooks/useGoogleSignIn';

function GoogleSignInButton({ clientId, onSuccess }) {
  const buttonRef = useGoogleSignIn(clientId, onSuccess);

  return (
    <div className="flex justify-center">
      <div ref={buttonRef}></div>
    </div>
  );
}

export default GoogleSignInButton;