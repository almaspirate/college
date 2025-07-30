import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Notice from "./pages/Notice";
import Result from "./pages/Result";
<<<<<<< HEAD
import AllTeachersPage from "./pages/TeacherList";
=======
>>>>>>> c67b98635bb65160a126ee5d95ab9f9b2302015f
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notice" element={<Notice />} />
<<<<<<< HEAD
        <Route path="/teachers" element={<AllTeachersPage />} />
=======
        <Route path="/result" element={<Result />} />
>>>>>>> c67b98635bb65160a126ee5d95ab9f9b2302015f
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
