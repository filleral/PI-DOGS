
import s from "./LandingPage.module.css";
import {Link} from "react-router-dom";
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
import './../Details/DogDetail/VideoCard.css';

function LandingPage() {
  const [videoUrlList] = useState([
    "https://media.istockphoto.com/id/532149160/es/v%C3%ADdeo/en-c%C3%A1mara-lenta-labrador-cachorro-corriendo-en-hierba-al-amanecer.mp4?s=mp4-640x640-is&k=20&c=sYSc4ju98njoRW6njPqQWGbO6jHNzczaJsmd-pV007I=",
    "https://joy1.videvo.net/videvo_files/video/free/video0472/large_watermarked/_import_61a314f3489f04.76571792_preview.mp4",
    "https://player.vimeo.com/external/364841370.sd.mp4?s=8a3174708b70bbb90526d5aad598bd918223c202&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/358531424.sd.mp4?s=34a656580e2899b3e7b2fb0ece9a5910cfe53566&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/210743842.sd.mp4?s=fcf7c509e74a02a35175a2d9294eb2e25d6c74ef&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/403278689.hd.mp4?s=791eaa4bfecbae421613ab0401a39b429542f18d&profile_id=174&oauth2_token_id=57447761"
  ]);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoUrlList.length);
    setCurrentVideoUrl(videoUrlList[randomIndex]);
  }, [videoUrlList])
  return(
    <div>
      {/* --- header --- */}
      <header>
        <nav>
          <span className={s.logo}>DOGS</span>
          <Link to="/home" className={s.acceder}>Acceder</Link>
        </nav>
      </header>
      {/* --- main --- */}
      <main>
        <div className={s.main_left}>
          <h1 className={s.titulo}>Un perro es la única cosa en la tierra que te amará más de lo que se ama a sí mismo</h1>
          <p className={s.sub_titulo}>Tu mejor amigo te conoce mejor que nadie, tu lo conoces a el? averígualo con la mejor app sobre nuestros peludos favoritos.</p>
          <Link to="/home" className={s.acceder_grande}>Acceder<img className={s.arrow} src={arrow} alt="arrow" /></Link>
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
          <p className={s.funcion_desc}>Busca a tu  perro favorito</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon2} alt="icon" />
          <p className={s.funcion_desc}>Filta por raza o temperamento</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon3} alt="icon" />
          <p className={s.funcion_desc}>Agrega un nuevo amigo</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon4} alt="icon" />
          <p className={s.funcion_desc}>Razas de <br /> todo el mundo</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon5} alt="icon" />
          <p className={s.funcion_desc}>llevalos <br /> siempre contigo</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage;