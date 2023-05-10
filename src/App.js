import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Accordion from './components/Accordion/Accordion'
import Slider from './components/Slider/Slider'
import ProfilLocate from './components/ProfilLocate/ProfilLocate'

function App() {
  return (
    <>
      <Navbar/>
      <header>
        <Banner/>
        <Card/>
        <Accordion/>
        <Slider/>
        <ProfilLocate/>
      </header>
      
    </>
  );
}

export default App;
