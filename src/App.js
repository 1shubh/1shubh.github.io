
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
