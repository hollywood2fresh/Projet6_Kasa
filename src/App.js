import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Accueil from './Containers/Accueil/Accueil';
// import Banner from './components/Banner/Banner'
// import Card from './components/Card/Card'
// import Accordion from './components/Accordion/Accordion'
// import Slider from './components/Slider/Slider'
// import ProfilLocate from './components/ProfilLocate/ProfilLocate'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil/>}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
