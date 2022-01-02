import "../styles/globals.css";

import { initializeFirebase } from "../push_message";
function MyApp({ Component, pageProps }) {
  initializeFirebase();
  return <Component {...pageProps} />;
}

export default MyApp;
