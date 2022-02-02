import React, { useState } from "react";
import "./Home.css";
import video from "../media/video.mp4";
import hk from "../media/hk.mp4";
import iconGit from "../media/iconGit.png";
import henrykids from "../media/henrykids.png";
import wpp from "../media/wpp.png";
import github from "../media/github.png";
import linkedin from "../media/linkedin.png";
import CV from "../media/CV-Giovanna.pdf";
import gmail from "../media/gmail.png";
import pokemon from "../media/pokemon.png";
import icons from "../media/icons.svg";
import perfil from "../media/perfil.jpg";
import NearMeIcon from "@material-ui/icons/NearMe";
import create from "../pokemonApp/create.png";
import landing from "../pokemonApp/landing.png";
import search from "../pokemonApp/search.png";
import home from "../pokemonApp/home.png";
import detail from "../pokemonApp/detail.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Modal } from "@material-ui/core";

const Home = () => {
  // const styles = useStyles();
  const [modal, setModal] = useState(false);
  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const body = (
    <div className="modal">
      <button onClick={() => abrirCerrarModal()} className="btn">
        {" "}
        x{" "}
      </button>
      <div className="contact">
        <ul className="data">
          <li>
            <a href="https://www.linkedin.com/in/giovanna-cilfone/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="404" className="data-img" />
            </a>
          </li>
          <li>
            <a href="https://github.com/giovannacilfone" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="404" className="data-img" />
            </a>
          </li>
          <li>
            <a href="mailto:giovannacilfone2@gmail.com" target="_blank" rel="noopener noreferrer" >
              <img src={gmail} alt="404" className="data-img" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+5491123882616" target="_blank" rel="noopener noreferrer">
              <img src={wpp} alt="404" className="data-img" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
  return (
    <>
      <div className="section-1">
        <video className="video" src={video} autoPlay loop muted />
        <Modal open={modal} onClose={abrirCerrarModal}>
          {body}
        </Modal>
        <div className="container">
          <ul className="ul-li">
            <li>
              <a href={CV} download>
                MI CV
              </a>
            </li>
            <li>
              <button onClick={() => abrirCerrarModal()} className="bottom">
                {" "}
                CONTACTO{" "}
              </button>
            </li>
            <li>
              <a href="#section-2"> SOBRE MÍ </a>
            </li>
            <li>
              <a href="#section-3"> PROYECTOS </a>
            </li>
          </ul>
        </div>
        <div className="title">
          <h1>GIOVANNA CILFONE</h1>
          <p>
            Front End Developer | HTML | CSS | JavaScript | React | Redux | Node
            JS{" "}
          </p>
          <a href="#section-2" className="arrow">
            <ExpandMoreIcon color="primary" style={{ fontSize: 90 }} />
          </a>
        </div>
      </div>
      <div id="section-2" className="section-2">
        <div className="profile">
          <img src={perfil} alt="404" className="perfil" />
          <p>
            ¡Hola! Soy Giovanna, Front End Developer (Jr) y sobre todo, una persona
            que sigue buscando aprender día a día. Al conocer el mundo IT,
            descubrí mi pasión por el diseño y los estilos. Luego de cursar el
            bootcamp de "Soy Henry", con más de 800 horas de código, decidí
            abrirme al Front End ya que fue lo que más me atrapó.{" "}
            <FavoriteIcon color="primary" /> <br />
            Estoy en búsqueda de nuevos desafíos, en los cuales potenciar mis
            capacidades y así también seguir creciendo tanto personal como
            profesionalmente.
          </p>
        </div>
        <div className="skills">
          <div className="tech-skills">
            <h2 className="skills-title"> TECH SKILLS</h2>
            <img src={icons} alt="404" className="icons" />
          </div>
          <div className="my-proyects">
            <p>¡Te invito a conocer mis proyectos!</p>
            <a href="#section-3" className="arrow-2">
              <ExpandMoreIcon color="primary" style={{ fontSize: 120 }} />
            </a>
          </div>
        </div>
      </div>
      <div id="section-3" className="section-3">
        <img src={pokemon} alt="404" className="pokemon" />
        <div className="pokemonApp">
          <div className="pokeTitle">
            <NearMeIcon className="navigation" style={{ fontSize: 40 }} />
            <a href="https://pi-pokemon-gio.vercel.app/" target="_blank">
              <h1 className="h1"> POKEMON APP </h1>{" "}
            </a>
            <a
              href="https://github.com/giovannacilfone/PI-Pokemon"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={iconGit} alt="404" width="60px" className="icon-git" />
            </a>
          </div>
          <div className="slider">
            <ul>
              <li>
                <img src={landing} alt="404" />{" "}
              </li>
              <li>
                <img src={home} alt="404" />
              </li>
              <li>
                <img src={search} alt="404" />
              </li>
              <li>
                <img src={detail} alt="404" />
              </li>
              <li>
                <img src={create} alt="404" />
              </li>
            </ul>
          </div>
          <a href="#section-4" className="arrow-3">
            <ExpandMoreIcon color="primary" style={{ fontSize: 90 }} />
          </a>
        </div>
      </div>
      <div id="section-4" className="section-4">
        <img src={henrykids} alt="404" className="henryKidsBg" />
        <div className="henryKids">
          <div className="hk-cont-title">
            <h2 className="hkTitle"> HENRY KIDS </h2>
            <a
              href="https://github.com/giovannacilfone/Henry-Kids"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={iconGit} alt="404" width="60px" className="icon-git" />
            </a>
          </div>
          <video className="videoHk" src={hk} autoPlay loop muted />
          <h4 className="h4"> Grupal - (Deploy en proceso)</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
