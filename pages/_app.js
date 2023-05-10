import { Nav } from "@/components/Nav";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
