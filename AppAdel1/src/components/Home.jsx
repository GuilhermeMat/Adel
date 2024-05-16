'use client'
import logo from "../img/adel.png"
import config from "../img/configuracao.png"
import perfil from "../img/usuario.png"
import igreja from "../img/igreja.png"
import ministerio from "../img/ministerio.png"
import noticia from "../img/noticia.png"
import biblia from "../img/biblia.png"
import oracao from "../img/oracao.png"
import foto from "../img/foto.png"
import instagram from "../img/instagram.png"
import grupo from "../img/grupo.png"
import agenda from "../img/agenda.png"
import { useRouter } from "next/navigation"


function Home() {
  const router = useRouter()

  return (
      <div className="capsula">

        <div className="nav">

          <div className="config">
            <img src={config.src} alt="Configuração" className='imgconfig'/>
          </div>

          <div className="perfil">
            <img src={perfil.src} alt="Perfil" className='imgperfil'/>
          </div>

        </div>

        <div className='divlogo'>
          <img src={logo.src} alt="Adel Parque Alvorada 1" className='imglogo'/>
        </div>

        <div className="icons">

          <div className="icones">

            <div className="pagigreja">
              <img src={igreja.src} alt="Igreja" />
              <p>Igreja</p>
            </div>

            <div className="pagministerio">
              <img src={ministerio.src} alt="Ministerio" />
              <p>Ministério</p>
            </div>

            <div className="pagnoticia">
              <img src={noticia.src} alt="Notícias" />
              <p>Notícias</p>
            </div>

          </div>
          <div className="icones">

            <div className="pagbiblia">
              <img src={biblia.src} alt="Bíblia" />
              <p>Bíblia</p>
            </div>

            <div className="pagoracao">
              <img src={oracao.src} alt="Oração" />
              <p>Oração</p>
            </div>

            <div className="pagfoto">
              <img src={foto.src} alt="Fotos" />
              <p>Fotos</p>
            </div>

          </div>
          <div className="icones">
            <a className='InstagramLink' target='_blank' rel="stylesheet" href="https://www.instagram.com/adelparquealvoradai/">
              <div className="paginstagram">
                <img src={instagram.src} alt="Instagram" />
                <p>Instagram</p>
              </div>
            </a>

            <div className="paggrupo">
              <img src={grupo.src} alt="PGI" />
              <p>PGI</p>
            </div>

            <div className="pagagenda">
              <img src={agenda.src} alt="Agenda" />
              <p>Agenda</p>
            </div>

          </div>

        </div>

      </div>
  )
}

export default Home
