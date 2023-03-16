import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Tech from "./pages/Tech";
import Works from "./pages/Works";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Header />
          <Home />
        </div>
        <About />
        <Tech />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
