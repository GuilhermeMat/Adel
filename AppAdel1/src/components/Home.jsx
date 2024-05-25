"use client";
import logo from "../img/adel.png";
import config from "../img/configuracao.png";
import igreja from "../img/igreja.png";
import noticia from "../img/noticia.png";
import biblia from "../img/biblia.png";
import oracao from "../img/oracao.png";
import foto from "../img/foto.png";
import instagram from "../img/instagram.png";
import grupo from "../img/grupo.png";
import ministerio from "../img/ministerio.png";
import agenda from "../img/agenda.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authentication } from "@/auth";
import Loading from "./Loading";
import { Box, Collapse, Slide, Typography } from "@mui/material";
import { AccountCircle, ExitToApp, Person } from "@material-ui/icons";
import { decodeUser } from "@/utils";
import Header from "./Header";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [nameInitials, setNameInitials] = useState("US");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const treatUserName = (nick) => {
    const listName = nick.split(" ");
    if (listName.length > 1) {
      return `${listName[0][0]}${listName[1][0]}`;
    } else {
      return `${listName[0][0]}`;
    }
  };

  const logOut = () => {
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated) {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    const token = JSON.parse(localStorage.getItem("token"));
    const { name } = decodeUser(token);
    setNameInitials(treatUserName(name));
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="divlogo">
        <img src={logo.src} alt="Adel Parque Alvorada 1" className="imglogo" />
      </div>

      <div className="icons">
        <div className="icones">
          <div
            onClick={() => {
              router.push("/church");
            }}
          >
            <img className="pagigreja" src={igreja.src} alt="Igreja" />
            <p style={{ color: "white" }}>Igreja</p>
          </div>

          <div
            onClick={() => {
              router.push("/ministry");
            }}
          >
            <img
              className="pagministerio"
              src={ministerio.src}
              alt="Ministerio"
            />
            <p style={{ color: "white" }}>Ministério</p>
          </div>

          <div
            onClick={() => {
              router.push("/news");
            }}
          >
            <img className="pagnoticia" src={noticia.src} alt="Notícias" />
            <p style={{ color: "white" }}>Notícias</p>
          </div>
        </div>
        <div className="icones">
          <div
            onClick={() => {
              router.push("/bible");
            }}
          >
            <img className="pagbiblia" src={biblia.src} alt="Bíblia" />
            <p style={{ color: "white" }}>Bíblia</p>
          </div>

          <div
            onClick={() => {
              router.push("/prayer");
            }}
          >
            <img className="pagoracao" src={oracao.src} alt="Oração" />
            <p style={{ color: "white" }}>Oração</p>
          </div>

          <div
            onClick={() => {
              router.push("/photos");
            }}
          >
            <img className="pagfoto" src={foto.src} alt="Fotos" />
            <p style={{ color: "white" }}>Fotos</p>
          </div>
        </div>
        <div className="icones">
          <a
            className="InstagramLink"
            target="_blank"
            rel="stylesheet"
            href="https://www.instagram.com/adelparquealvoradai/"
          >
            <div>
              <img
                className="paginstagram"
                src={instagram.src}
                alt="Instagram"
              />
              <p style={{ color: "white" }}>Instagram</p>
            </div>
          </a>

          <div
            onClick={() => {
              router.push("/pgi");
            }}
          >
            <img className="paggrupo" src={grupo.src} alt="PGI" />
            <p style={{ color: "white" }}>PGI</p>
          </div>

          <div
            onClick={() => {
              router.push("/schedule");
            }}
          >
            <img className="pagagenda" src={agenda.src} alt="Agenda" />
            <p style={{ color: "white" }}>Agenda</p>
          </div>
        </div>
      </div>
      {/* <footer>
        <p>Rodapé aqui...</p>
      </footer> */}
    </div>
  );
}

export default Home;
