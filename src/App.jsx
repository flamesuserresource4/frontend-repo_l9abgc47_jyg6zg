import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Membership from "./components/Membership";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <News />
        <Membership />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;
