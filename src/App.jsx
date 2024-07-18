import { AboutWp } from "./components/AboutWp/AboutWp.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Header } from "./components/Header/Header.jsx";
import { PowerWp } from "./components/PowerWp/PowerWp.jsx";
import "./App.css";


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <AboutWp/>
      <PowerWp/>
    </>
  )
}

export default App;
