import Header from "../components/layouts/Header";
import About from "../components/home/About";
import Certificates from "../components/home/Certificates";
import Contact from "../components/home/Contact";
import Landing from "../components/home/Landing";
import Projects from "../components/home/Projects";

function Home() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}
export default Home;
