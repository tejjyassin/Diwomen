import About from "./components/About";
import AnimatedImages from "./components/AnimatedImages";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Sponsors />
    {/* <AnimatedImages /> */}
    <About />
    <Gallery />
    <Join />
    <Footer />
    </>
  )
}
