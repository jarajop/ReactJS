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
import Etat from './componants/Etat';
import Etat2 from './componants/Etat2';
import Etat3 from './componants/Etat3';
import EtatForm from './componants/EtatForm';
import TexteClickable from './componants/TexteClickable';
import Etat4 from './componants/Etat4';


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
       <Route path='/connexion' element={ <TexteClickable/>}/>  {/* ici c la page connexion ki doit etre la  mai je fais ds tests avc les etats c pourkw*/}
       <Route path='/login' element={ <Login />}/>
       <Route path='/footer' element={ <Footer/>}/>

       
       </Routes>
       
       </BrowserRouter>

    </div>
  );
}

export default App;
 