import "./App.css";
import Nav from "./Componants/Nav";
import Footer from "./Componants/Footer";
import Home from "./Homepage/Home";
import About from "./Componants/About";
import Errorpage from "./Componants/Pagenotfound";
import Sidebar from "./Componants/Sidebar";
import Contact from "./Componants/Contact";
import Service from './Componants/Service'
import Homeloan from './Componants/Homeloan'
import PersonalLoan from "./PersonalLoan/PersonalLoan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoldLoan from "./Componants/GoldLoan";
import BuisnessLoan from "./Componants/BuisnessLoan";
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Nav />
        </header>
        <aside>
          <Sidebar />
        </aside>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/homeloan" element={<Homeloan />} />
          <Route path="/personalloan" element={<PersonalLoan />} />
          <Route path="/goldloan" element={<GoldLoan />} />
          <Route path="/buisnessloan" element={<BuisnessLoan />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
