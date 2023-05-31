import { Nav } from "@/components/Nav";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";
import { ContextProvider } from "@/context/contextProvider";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Banner />
      <Nav />
      <main className="min-h-[80vh]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ContextProvider>
  );
}
