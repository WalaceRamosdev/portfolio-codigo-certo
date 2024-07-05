import logo from './logo.svg';
import './App.css';
import { Header } from './sections/Header';
import { AboutMe } from './sections/AboutMe';
import { Tecnologies } from './sections/Tecnologies';
import { Projects } from './sections/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Tecnologies/>
      <Projects/>
    </div>
  );
}

export default App;
