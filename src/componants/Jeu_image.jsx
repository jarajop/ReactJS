import Img1 from "../assets/images/cars/shutterstock_1303104538.jpg";
import Img2 from "../assets/images/cars/stock-photo-back-passenger-seats-in-modern-luxury-comfortable-car-58438351.jpg"
import Img3 from "../assets/images/cars/stock-photo-car-inside-interior-of-prestige-modern-car-comfortable-leather-seats-black-cockpit-with-on-374122885.jpg"
import Img4 from "../assets/images/cars/stock-photo-luxury-car-inside-interior-of-prestige-modern-car-comfortable-leather-seats-red-perforarated-761045767.jpg"
import Img5 from "../assets/images/cars/stock-photo-modern-car-interior-shallow-dof-selective-focus-color-toned-image-65336500.jpg"
import Img6 from "../assets/images/cars/stock-photo-modern-car-interior-313108094.jpg"
import Img7 from "../assets/images/cars/stock-photo-over-the-shoulder-view-of-happy-black-male-driver-holding-smartphone-with-white-blank-screen-using-2149227657.jpg"
import Img8 from "../assets/images/cars/stock-photo-view-of-the-interior-of-a-modern-automobile-showing-the-dashboard-tuning-orange-luxury-car-536896924.jpg"
import Img9 from "../assets/images/cars/stock-photo-modern-car-interior-shallow-dof-selective-focus-color-toned-image-65336500.jpg"

function Jeu_image() {
  return (
    <div className="container">

      <div className="row my-3">
        <div className="col-4"><img className="taille" src={Img1} /></div>
        <div className="col-4"> <img className="taille" src={Img2} />  </div>
        <div className="col-4"> <img className="taille" src={Img3} /></div>
      </div>

        <div className="row mb-3">
        <div className="col-6"> <img className="img-fluid" src={Img4} /> </div>
        <div className="col-6"> <img className="img-fluid" src={Img5} /></div>
        </div>


        <div className="row mb-3">
        <div className="col-3"> <img className="img-fluid" src={Img6} /> </div>
        <div className="col-3"> <img className="img-fluid" src={Img7} /></div>
        <div className="col-3"> <img className="img-fluid" src={Img8} /> </div>
        <div className="col-3"> <img className="img-fluid" src={Img9} /></div>
        </div>

        </div>
  );
}

export default Jeu_image;
