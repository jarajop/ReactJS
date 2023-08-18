import { NavLink } from "react-router-dom";
import Img9 from "../assets/images/home/banner_faq.png";
import "../assets/styles/style.css";
import { Icon } from "@iconify/react";

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

      <div id="propos ">
        <div className="text-center d-flex justify-content-center">
          <div>
            <h3 className="p2">A Propos de nous </h3>
            <hr className="trait " />
            <p className=" text2 mb-5">
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
      <div className="container mt-5 mb-5">
        <div className="row  ">
          <div className="col-6">
            <div className="kestion d-flex justify-content-between align-items-center">
              <p className="p-0 m-0"> Question question?</p>
              <Icon
                icon="ph:plus-light"
                color="#908f8f"
                width="32"
                height="32"
              />
            </div>{" "}
          </div>
          <div className="col-6">
            <div className="kestion d-flex justify-content-between align-items-center">
              <p className="p-0 m-0"> Question question?</p>
              <Icon
                icon="ph:plus-light"
                color="#908f8f"
                width="32"
                height="32"
              />
            </div>{" "}
          </div>
          <div className="col-6">
            <div className="kestion d-flex justify-content-between align-items-center">
              <p className="p-0 m-0"> Question question?</p>
              <Icon
                icon="ph:plus-light"
                color="#908f8f"
                width="32"
                height="32"
              />
            </div>{" "}
          </div>
          <div className="col-6">
            <div className="kestion d-flex justify-content-between align-items-center">
              <p className="p-0 m-0"> Question question?</p>
              <Icon
                icon="ph:plus-light"
                color="#908f8f"
                width="32"
                height="32"
              />
            </div>{" "}
          </div>
          <div className="col-6">
            <div className="kestion d-flex justify-content-between align-items-center">
              <p className="p-0 m-0"> Question question?</p>
              <Icon
                icon="ph:plus-light"
                color="#908f8f"
                width="32"
                height="32"
              />
            </div>{" "}
          </div>
          <div className="col-6">
            <div className="kestion d-flex justify-content-between align-items-center">
              <p className="p-0 m-0"> Question question?</p>
              <Icon
                icon="ph:plus-light"
                color="#908f8f"
                width="32"
                height="32"
              />
            </div>{" "}
          </div>
          <div className="col-6">
            <div className="kestion d-flex justify-content-between align-items-center">
              <p className="p-0 m-0"> Question question?</p>
              <Icon
                icon="ph:plus-light"
                color="#908f8f"
                width="32"
                height="32"
              />
            </div>{" "}
          </div>
          <div className="col-6">
            <div className="kestion d-flex justify-content-between align-items-center">
              <p className="p-0 m-0"> Question question?</p>
              <Icon
                icon="ph:plus-light"
                color="#908f8f"
                width="32"
                height="32"
              />
            </div>{" "}
          </div>
        </div>
      </div>

      {/* <hr className="horizontal" /> */}
      <hr className="horizontal" />
      
     <div className="container ">

        <div className="row  ">
          <div className="col-4">
            <hr className="vertical" />
            <div className="alignement2">
              <p className="text-start aide"> Besoin d'aide ?</p>
              <p className="text-start aide2">
                {" "}
                Contactez-nous par téléphone ou par mail <br />{" "}
              </p>

              <p className="text-start aide2">
                <Icon
                  icon="dashicons:phone"
                  color="#11355f"
                  width="20"
                  height="20"
                  rotate={1}
                />{" "}
                +221 78 136 36 35
                <Icon
                  icon="entypo:old-phone"
                  color="#11355f"
                  width="20"
                  height="20"
                />{" "}
                +221 33 825 23 26
              </p>

              <p className="text-start aide2">
                <Icon
                  icon="fluent:mail-28-filled"
                  color="#11355f"
                  width="28"
                  height="28"
                />{" "}
                Contact@subitotaxi.net
              </p>
            </div>
          </div>

          <div className="col-4">
            <hr className="vertical" />
            <div className="alignement2">
              <p className="text-start aide"> Suivez - nous</p>
              <p className="text-start aide justify-content-space-between">
                <Icon
                  icon="mingcute:facebook-line"
                  color="#11355f"
                  width="24"
                  height="24"
                />
                <Icon
                  icon="jam:linkedin-circle"
                  color="#11355f"
                  width="24"
                  height="24"
                />
                <Icon
                  icon="ant-design:instagram-outlined"
                  color="#11355f"
                  width="24"
                  height="24"
                />
                <Icon
                  icon="jam:youtube-circle"
                  color="#11355f"
                  width="24"
                  height="24"
                />{" "}
              </p>
              <p className="text-start aide">Newsletter </p>
              <div className="d-flex ">
                <input
                  className="renseigner "
                  placeholder="Votre adresse email"
                  type="email"
                  id="email"
                  required
                />
                <button className="boutton3" type="submit" id="submit">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <hr className="vertical" />
            <div className="alignement2">
              {" "}
              <br />
              <p className="text-start aide">FAQ </p>
              <p className="text-start aide">Accueil </p>
              <p className="text-start aide">Termes d’utilisateur </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="d-flex horizontal2" />
      <p className="copyright">
        Copyright{" "}
        <Icon
          icon="emojione-monotone:copyright"
          color="white"
          width="26"
          height="26"
        />
      </p>
    </div>
  );
}
export default Accueil;