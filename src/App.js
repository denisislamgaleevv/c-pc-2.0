 
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Footer} from './components/Footer/Footer'
import { Contacts } from './components/Contacts/Contacts';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Reviews } from './components/Reviews/Reviews';
 
function App() {
  return (
    <div className="App">
      <Header/> 
      <Routes >
        <Route path ='/' element= {  <Main/> }/> 
        <Route path ='/about' element= {  <About/> }/>  
        <Route path ='/portfolio' element= {  <Portfolio/> }/>  
        <Route path ='/reviews' element= {  <Reviews/> }/>  
        <Route path ='/contacts' element= {  <Contacts/> }/>  
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
