"use client";
import logo from "../img/adel.png";
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
import { Box, Typography } from "@mui/material";
import axios from "axios";
import Paragraph from "./Paragraph";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [bibleInfos, setBibleInfos] = useState({ number: 0, text: "" });
  const [bookInfos, setBookInfos] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated === "/") {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    const infos = JSON.parse(localStorage.getItem('bookInfos'))
    const verse = JSON.parse(localStorage.getItem('bibleInfos'))
    const expTime = JSON.parse(localStorage.getItem('exp'))
    if (infos && verse && expTime && new Date().getTime() < expTime) {
      setBookInfos(infos)
      setBibleInfos(verse)
    } else {
      fetchRandomVerse();
    }
    setIsLoading(false);
  }, [])

  const fetchRandomVerse = async () => {
    try {
      const response = await axios(
        `${process.env.NEXT_PUBLIC_BIBLE_BASE_URL}/verses/nvi/random`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BIBLE_USER_TOKEN}`,
          },
        }
      );
      setBookInfos(
        `${response.data.book.author} ${response.data.chapter}: ${response.data.number}`
      );
      localStorage.setItem(
        'bookInfos',
        JSON.stringify(`${response.data.book.author} ${response.data.chapter}: ${response.data.number}`)
      )
      setBibleInfos({ number: response.data.number, text: response.data.text });
      localStorage.setItem('bibleInfos', JSON.stringify({ number: response.data.number, text: response.data.text }))
      localStorage.setItem('exp', JSON.stringify(new Date().getTime() + 24 * 60 * 60 * 1000))
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar Versículo", error);
    }
  };

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
              setIsLoading(true);
              router.push("/church");
            }}
          >
            <img className="pagigreja" src={igreja.src} alt="Igreja" />
            <p style={{ color: "white" }}>Igreja</p>
          </div>

          <div
            onClick={() => {
              setIsLoading(true);
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
              setIsLoading(true);
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
              setIsLoading(true);
              router.push("/bible");
            }}
          >
            <img className="pagbiblia" src={biblia.src} alt="Bíblia" />
            <p style={{ color: "white" }}>Bíblia</p>
          </div>

          <div
            onClick={() => {
              setIsLoading(true);
              router.push("/prayer");
            }}
          >
            <img className="pagoracao" src={oracao.src} alt="Oração" />
            <p style={{ color: "white" }}>Oração</p>
          </div>

          <div
            onClick={() => {
              setIsLoading(true);
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
              setIsLoading(true);
              router.push("/pgi");
            }}
          >
            <img className="paggrupo" src={grupo.src} alt="PGI" />
            <p style={{ color: "white" }}>PGI</p>
          </div>

          <div
            onClick={() => {
              setIsLoading(true);
              router.push("/schedule");
            }}
          >
            <img className="pagagenda" src={agenda.src} alt="Agenda" />
            <p style={{ color: "white" }}>Agenda</p>
          </div>
        </div>
      </div>
      {bibleInfos.number && (
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            margin: "20px auto 0 auto",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paragraph
              {...{
                number: bibleInfos.number,
                text: bibleInfos.text,
              }}
            />
            <Typography
              sx={{
                color: "#fff",
              }}
            >
              {bookInfos}
            </Typography>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Home;
