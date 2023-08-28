import { AppProps } from "next/app";
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import CookieConsent from "react-cookie-consent";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  
  
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <CookieConsent
                location="bottom"
                buttonText="Akzeptieren"
                cookieName="cookieBanner"
                style={{ background: "#1E1E1E", fontFamily:"Inter, sans-serif", fontSize: "15px" }}
              
                buttonStyle={{ background: "var(--primary)", paddingLeft:"35px", paddingRight:"35px", color: "white", fontSize: "13px", height: "50px", borderRadius:"4px"  }}
                expires={150}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolorum autem corporis eos, beatae sapiente omnis quia rem expedita officia.
        </CookieConsent>
        <Component {...pageProps} />
      </>
    );    
  }
}
