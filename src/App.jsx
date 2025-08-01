import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Notice from "./pages/Notice";
import AllTeachersPage from "./pages/TeacherList";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/teachers" element={<AllTeachersPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
