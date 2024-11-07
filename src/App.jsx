import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Logement from "./pages/logement/logement";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
