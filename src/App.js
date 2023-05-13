import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Accueil from './Containers/Accueil/Accueil';
import Logement from './Containers/Logement/Logement'
import Apropos from './Containers/Apropos/Apropos'
import Error from './Containers/Error/Error'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className="selectBody">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/logement/:id" element={<Logement/>}/>
            <Route path="/A-Propos" element={<Apropos/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
