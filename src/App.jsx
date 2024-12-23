import "./App.css";
import Hero from "./Component/Hero";
import react from "react";
import MyWorld from "./Component/MyWorld";
import Fresher from "./Component/Fresher";
import Cursor from "./utils/Cursor";
import Skills from "./Component/Skills";
import Portfolio from "./Component/Portfolio";
import Touch from "./Component/Touch";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <Cursor />
      <Hero />
      <MyWorld />
      <Fresher />
      <Skills />
      <Portfolio />
      <Touch />
      <Footer />
    </>
  );
}

export default App;
