import About from "../components/About";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

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
