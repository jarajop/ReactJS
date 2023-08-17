import { NavLink } from "react-router-dom";
import Img9 from "../assets/images/home/banner_faq.png";
import "../assets/styles/style.css";

function Accueil() {
  return (
    <div>
      <div id="home">
        <div className="alignement">
          <div className="paragraph">LE CONFORT AU MEILLEUR PRIX !</div>
          <div className="paragraph2">
            <p className="text-start">
              Chers Partenaires, Nous sommes ravis de vous accueillir en tant
              qu'entreprise sur <br />
              notre plateforme de réservation en ligne. Nous sommes déterminés à
              vous offrir une <br /> expérience de réservation efficace et
              adaptée à vos besoins en entreprise{" "}
            </p>
          </div>{" "}
          <br />
          <NavLink type="button2" to="/login" className="boutton2">
            Connectez-vous
          </NavLink>
        </div>
      </div>

      <div id="propos">
        <div className="text-center d-flex justify-content-center">
          <div>
            <h3 className="p2">A Propos de nous </h3>
            <hr className="trait " />
            <p className=" text2 ">
              Lorem ipsum dolor sit amet consectetur. Varius vitae aliquam vel
              porttitor mauris.din. Ullamcorper vel hendrerit enim massa duis.
              Donec tincidunt mauris facilisis eu tellus justo nibh. Pretium at
              elementum estas arcu. Et laoreet neque laoreel hendrerit enim
              massa duis. Donec tincidunt mauris facilisis eu tellus justo nibh.
              Pretium at elementum tristique egestas arcu. Et laoreet neque
              laoreel hendincidunt mauris facilisis eu tellus justo nibh.
              Pretium at elementum tristiqus arcu. Et laoreet neque laoreet.
            </p>
          </div>

          <div></div>
        </div>
      </div>
      <div className=" w-100 row  text-center d-flex justify-content-center">
        <div className="col-6">
          <div className="question">
            <p>Question question ?</p>
          </div>
        </div>
        <div className="col-6">
          <div className="question ">
            <p>Question question ?</p>
          </div>
        </div>

        <div className="col-6">
          <div className="question ">
            <p>Question question ?</p>
          </div>
        </div>
        <div className="col-6">
          <div className="question ">
            <p>Question question ?</p>
          </div>
        </div>
        <div className="col-6">
          <div className="question ">
            <p>Question question ?</p>
          </div>
        </div>
        <div className="col-6">
          <div className="question">
            <p>Question question ?</p>
          </div>
        </div>
        <div className="col-6 ">
          <div className="question ">
            <p>Question question ?</p>
          </div>
        </div>
        <div className="col-6">
          <div className="question  ">
            <p>Question question ?</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Accueil;
