import Img1 from "../assets/images/cars/shutterstock_1303104538.jpg";
import "../assets/styles/style.css";

function GridBootstrap() {
  return (
    <div className="container">
      <div className="row">
        <div className="col bg-success text-light">
          Colonne 1
          {/* <img  className="img-fluid"  src={Img1} />  donc la c 1 propriete Bootstrap qui permet a limage de prendre la taille du composant parent*/}
          {/* ou bien a la place on peut definit nos propres classes et on y applique notre propre style css N'oublie jamias d'impoter le css ds le composant ou
 tu vas l'utiliser et aussi pt l'importation on ne met pas de cecin from non just le chemin du  fichier .ET Aussi pr l'image on a fait ceci : src={Img1} car considerant Img1 com 1 variable
 et en React on recupere la valeur d'une var avc 2 accolades et n'oublie jamais av React c classname au lieu de class seulement  */}
          <img className="essai" src={Img1} />
        </div>
        <div className="col bg-primary text-dark">Colonne 2</div>
        <div className="col bg-dark text-light">Colonne 3</div>
        <div className="col bg-danger text-light">Colonne 4</div>
      </div>
    </div>
  );
}
export default GridBootstrap;
// Et aussi pr les chemins ./  permet de remonter au repertoire qui contient ce fichiers alors que  ../  permet de remonter au repertoire qui contient le repertoire du fichier
//Et aussi la valeur des marges varie de 1 a 5
