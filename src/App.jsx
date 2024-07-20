import { AboutWp } from "./components/AboutWp/AboutWp.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Header } from "./components/Header/Header.jsx";
import { PowerWp } from "./components/PowerWp/PowerWp.jsx";
import { ModalWindow } from "./components/Modal/ModalWindow.jsx";
import "./App.css";


function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <AboutWp/>
        <PowerWp/>
        <ModalWindow/>
      </main>
    </>
  )
}

export default App;
