import { useEffect, useRef } from 'react';

export function useGoogleSignIn(clientId, onSuccess) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const loadGoogleScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = initializeGoogle;
        document.head.appendChild(script);
      } else {
        initializeGoogle();
      }
    };

    const initializeGoogle = () => {
      if (window.google && buttonRef.current) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: onSuccess
        });

        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",
          text: "signin_with",
          shape: "rectangular"
        });
      }
    };

    loadGoogleScript();
  }, [clientId, onSuccess]);

  return buttonRef;
}