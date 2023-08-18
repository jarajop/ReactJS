import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar'
// import GridBootstrap from './componants/GridBootstrap'
// import Jeu_image from './componants/Jeu_image';
import Services from './componants/Services';
import Confiance from './componants/Confiance';
import Voitures from './componants/Voitures';
import Accueil from './componants/Accueil';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Connexion from './componants/Connexion';
import Login from './componants/Login';
import Footer from './componants/Footer';


function App() {
  return (
    <div className="App">
      
       {/* 
      
       <Jeu_image/> */}
        
       <BrowserRouter> 
       <Navbar/>


       <Routes>

       <Route path='/' element={ <Accueil/>}/>
       <Route path='/services' element={ <Services/>}/>
       <Route path='/voitures' element={ <Voitures />}/>
       <Route path='/confiance' element={ <Confiance />}/>
       <Route path='/connexion' element={ <Connexion />}/>
       <Route path='/login' element={ <Login />}/>
       <Route path='/footer' element={ <Footer/>}/>

       
       </Routes>
       
       </BrowserRouter>

    </div>
  );
}

export default App;
 