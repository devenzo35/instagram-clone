import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { userContext } from "../context/userContext";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);
  return (
    <userContext.Provider value={[user, setUser]}>
      <Component {...pageProps} />
    </userContext.Provider>
  );
}

export default MyApp;
