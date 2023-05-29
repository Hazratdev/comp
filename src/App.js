import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Section1 from "./components/Section1";
import Section3 from "./page/Section3";
import Section2 from "./components/Section2";

function App() {
  return (
    <div className="App">
       <Header/>
            <Routes>
                <Route path={'/'} element={ <Home/>} />
                <Route path={'/section1'} element={ <Section1/>} />o
                <Route path={'/section2'} element={ <Section2/>} />
                <Route path={'/section3'} element={ <Section3/>} />
            </Routes>
    </div>
  );
}

export default App;
