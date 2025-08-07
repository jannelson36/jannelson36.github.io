import "../styles/globals.css";
import Analytics from "@/components/Analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
