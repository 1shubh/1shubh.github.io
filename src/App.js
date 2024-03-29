
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import useReady from './components/useReady';
import { Loader } from './components/Loader';
import { Navbar2 } from './components/Navbar2';
import { Fiver } from './components/Fiver';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {
  const {ready} = useReady(3000)
  return (
    <div className="App">
      {
        ready !== true ? (
          <Loader/>
        ) : (
        <div>
         {/* <Navbar/> */}
         <Navbar2/>
         <Home/>
         <About/>
         <Fiver/>
         <Skills/>
         <Projects/>
         <Contact/>
       </div>
        )
      }
    </div>
  );
}

export default App;
