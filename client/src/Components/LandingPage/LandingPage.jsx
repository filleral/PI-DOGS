import s from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

// import hero_desktop_responsive from "../../images/hero-desktop-responsive.png";
import arrow from "../../images/acc_arrow.svg";
// ----- icons -----
import icon1 from "../../images/icons/dog.png";
import icon2 from "../../images/icons/passport.png";
import icon3 from "../../images/icons/photo-shoot.png";
import icon4 from "../../images/icons/earth.png";
import icon5 from "../../images/icons/bagpack.png";
import "./../Details/DogDetail/VideoCard.css";

function LandingPage() {
  const [videoUrlList] = useState([
    "https://media.istockphoto.com/id/532149160/es/v%C3%ADdeo/en-c%C3%A1mara-lenta-labrador-cachorro-corriendo-en-hierba-al-amanecer.mp4?s=mp4-640x640-is&k=20&c=sYSc4ju98njoRW6njPqQWGbO6jHNzczaJsmd-pV007I=",
    "https://joy1.videvo.net/videvo_files/video/free/video0472/large_watermarked/_import_61a314f3489f04.76571792_preview.mp4",
    "https://player.vimeo.com/external/364841370.sd.mp4?s=8a3174708b70bbb90526d5aad598bd918223c202&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/358531424.sd.mp4?s=34a656580e2899b3e7b2fb0ece9a5910cfe53566&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/210743842.sd.mp4?s=fcf7c509e74a02a35175a2d9294eb2e25d6c74ef&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/403278689.hd.mp4?s=791eaa4bfecbae421613ab0401a39b429542f18d&profile_id=174&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/353569084.sd.mp4?s=f8537e25485085a53b1103a3cc2c1f2b9952b1a2&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/436938412.sd.mp4?s=6264885c3c113b5d0441cd34a12777eaddb87601&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/479032184.sd.mp4?s=8494309e0ae0bee8397869ae8870a17af9fd8ced&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/479032164.sd.mp4?s=34217d57b8f0f4c17e134ab44d3851d406861e0b&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/502185160.sd.mp4?s=ad105954dbf88c84d53e45f919224d50b28aad3f&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/210743769.sd.mp4?s=d8335a711eb59540361e4ddd2541aa922ea92112&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/353573691.sd.mp4?s=4a67049e97615f7094fda8b838b1cf62ecf3a086&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/353570447.sd.mp4?s=65b53a681dcad3718826f267a77542cda710b2c0&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/473351215.sd.mp4?s=66f87a53959edf5cd26ee234e3de9684f1e1a6c2&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/364708089.sd.mp4?s=c100dd3baed7609771e85ba9d094a3ef5fa3de74&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/473308772.sd.mp4?s=fa0650fd6121c90ba84ec0a6eb6fbab4d5947b00&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/434427931.sd.mp4?s=00787916e1a028468c347c07055d3f28fc8ba331&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/592768722.sd.mp4?s=5d339ef64df0be78292ac109fc32103907baaa99&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/436936585.sd.mp4?s=94e2bd194cc4f8aecefe3ec5d126dfb7d43c2909&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/592768709.sd.mp4?s=a033e432014451fb628b19d4a19767aced08a36c&profile_id=165&oauth2_token_id=57447761"
  ]);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(localStorage.getItem('currentVideoUrl') || '');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoUrlList.length);
    const newVideoUrl = videoUrlList[randomIndex];
    setCurrentVideoUrl(newVideoUrl);
    localStorage.setItem('currentVideoUrl', newVideoUrl);
  }, [videoUrlList]);
  return (
    <div>
      {/* --- header --- */}
      <header>
        <nav>
          <span className={s.logo}>DOGS</span>
          <Link to="/home" className={s.acceder}>
            Acceder
          </Link>
        </nav>
      </header>
      {/* --- main --- */}
      <main>
        <div className={s.main_left}>
          <h1 className={s.titulo}>
            Un perro es la única cosa en la tierra que te amará más de lo que se
            ama a sí mismo
          </h1>
          <p className={s.sub_titulo}>
            No importa cuánto tiempo estemos lejos, siempre nos reciben con una
            alegría desbordante y una cola que no deja de moverse
          </p>
          <Link to="/home" className={s.acceder_grande}>
            Acceder
            <img className={s.arrow} src={arrow} alt="arrow" />
          </Link>
        </div>

        <div className="card1">
          <div className="card1-body">
            <video className="card1-video" autoPlay loop muted playsInline>
              <source src={currentVideoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </main>

      <div className={s.div_functions}>
        <div className={s.funciones}>
          <img className={s.icon} src={icon1} alt="icon" />
          <p className={s.funcion_desc}>Busca a tu perro favorito</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon2} alt="icon" />
          <p className={s.funcion_desc}>Filtra por raza o temperamento</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon3} alt="icon" />
          <p className={s.funcion_desc}>Agrega un nuevo amigo</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon4} alt="icon" />
          <p className={s.funcion_desc}>
            Razas de <br /> todo el mundo
          </p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon5} alt="icon" />
          <p className={s.funcion_desc}>
            llevalos <br /> siempre contigo
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
