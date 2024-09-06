import Certification from "./components/Certification";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Footer from "./components/Footer";
import GridPage from "./components/Projects/GridPage";
import GridPage2 from "./components/Projects/GridPage2";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import GridPage3 from "./components/Projects/GridPage3";

function App() {
  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img "></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero />
          <NavBar />
          {/* <Bio/> */}
          <Education />
          {/* <Projects /> */}
          <Router>
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/project1" element={<GridPage />} />
              <Route path="/project2" element={<GridPage2 />} />
              <Route path="/project3" element={<GridPage3 />} />
            </Routes>
          </Router>
          {/* <WorkExperience/> */}
          <Skills />
          <Certification />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
