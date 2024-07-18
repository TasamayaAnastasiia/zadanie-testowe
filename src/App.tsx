import { AboutWp } from "./components/AboutWp/AboutWp.tsx";
import { Hero } from "./components/Hero/Hero.tsx";
import { Header } from "./components/Header/Header.tsx";
import { PowerWp } from "./components/PowerWp/PowerWp.tsx";
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
