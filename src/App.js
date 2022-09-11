import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Content from "./components/Content";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
