import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import Center from "./center";
import Skills from "./skills";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Center />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
