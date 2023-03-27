import React, { useState, useEffect } from "react";
import "./DogDetail.css";
import "./VideoCard.css";

function DogDetail({ dog }) {
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
    <div className="dogDetail">
      <div className="left">
        <div className="profile">
          <div className="div_dog_profile">
            <img className="image_dog_profile" src={dog?.image} alt="dog" />
          </div>
          <div className="div_dog_name">
            <h2 className="name_dog">{dog?.name}</h2>
            <span className="sobre_dog">SOBRE MI</span>
          </div>
        </div>

        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th className="encabezado_tabla">CARACTERISTICAS</th>
                <th className="encabezado_tabla">MIN</th>
                <th className="encabezado_tabla">MAX</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table_caracteristicas">ALTURA</td>
                <td className="table_datos">{dog?.height_min}</td>
                <td className="table_datos">{dog?.height_max} Cm</td>
              </tr>
              <tr>
                <td className="table_caracteristicas">PESO</td>
                <td className="table_datos">{dog?.weight_min}</td>
                <td className="table_datos">{dog?.weight_max} Kg</td>
              </tr>
              <tr>
                <td className="table_caracteristicas">AÑOS DE VIDA</td>
                <td className="table_datos">{dog?.life_span_min}</td>
                <td className="table_datos">{dog?.life_span_max} AÑOS</td>
              </tr>
              <tr>
                <td className="table_caracteristicas table_temp">
                  TEMPERAMENTO
                </td>
                <td colSpan="2" className="table_datos temp">
                  {dog?.temperament}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card1">
        <div className="card1-body">
          <video className="card1-video" autoPlay loop muted playsInline>
            <source src={currentVideoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default DogDetail;
