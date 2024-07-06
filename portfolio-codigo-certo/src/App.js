import './App.css';
import { Header } from './sections/Header';
import { AboutMe } from './sections/AboutMe';
import { Tecnologies } from './sections/Tecnologies';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Tecnologies/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
