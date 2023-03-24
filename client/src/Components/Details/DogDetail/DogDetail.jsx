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
