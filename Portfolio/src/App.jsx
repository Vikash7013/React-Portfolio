import AboutMe from "./Components/AboutMe";
import Activity from "./Components/Activity";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Hobbies from "./Components/Hobbies";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <div className="bg-slate-300 px-3 py-8">
        <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
          <Header />
          <AboutMe />
          <Projects />
          <Skills />
          <Education />
          <Hobbies />
          <Activity />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
