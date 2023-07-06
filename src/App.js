import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div className="App" style={{ width: "100%", overflow: "hidden" }}>
      <Background />
      <Home />
      <TrustedBy />
      <About />
      <Products />
      <Services />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
