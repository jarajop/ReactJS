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
import Form from './componants/Form';
import Accueil2 from './componants/Accueil2';
import Clés from './componants/Clés';
import Accordéon from './componants/Accordéon';
import Accordéon2 from './componants/Accordéon2';
import Authentification from './componants/Authentification';
import Form2 from './componants/Form2';
import Axios from './componants/Axios';
import FormCopie from './componants/FormCopie';



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
       <Route path='/connexion' element={ <Authentification/>}/>  {/* ici c la page connexion ki doit etre la  mai je fais ds tests avc les etats c pourkw*/}
       <Route path='/login' element={ <Login />}/>
       <Route path='/footer' element={ <Footer/>}/>
       <Route path='/form' element={ <Form/>}/>
       <Route path='/formcopie' element={ <FormCopie/>}/>
       <Route path='/accueil2' element={ <Accueil2/>}/>
       <Route path='/keys' element={ <Clés/>}/>
       <Route path='/accordeon' element={ <Accordéon/>}/>
       <Route path='/accordeon2' element={ <Accordéon2/>}/>
       <Route path='/form2' element={ <Form2/>}/>
       <Route path='/axios' element={ <Axios/>}/>
       <Route path='/connexion2' element={ <Form/>}/>
       <Route path='/etat2' element={ <Etat2/>}/>










       
       </Routes>
       
       </BrowserRouter>

    </div>
  );
}

export default App;
 