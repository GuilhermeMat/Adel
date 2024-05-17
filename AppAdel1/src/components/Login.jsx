"use client";
import React, { useEffect, useState } from "react";
import "../styles/login.css";
import { Box, Button, InputBase, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import adel from "../img/adel.png";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [button, setButton] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [pass, setPass] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPass(event.target.value)
  }

  useEffect(() => {
    const emailValid = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (email.match(emailValid) && pass.length >= 4) {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [email, pass])

  return (
    <Box sx={{ height: '98vh' }}
      display="flex"
      justifyContent='center'
      flexDirection="column"
    >
      <Box className="logo">
        <img className="logologin" src={adel.src} alt="" />
      </Box>
      <Box display="flex" justifyContent='center'>
        <Typography fontWeight={800} variant="h4" color='white'>Bem Vindo!</Typography>
      </Box>
      <Box display="flex" justifyContent='center'>
        <Typography variant="h6" color='white'>Acesse sua conta</Typography>
      </Box>
      <span style={{ margin: '0 0 8px 10%', color: 'white' }}>Email</span>
      <Box display="flex" justifyContent='center'>
        <InputBase
          value={email}
          onChange={handleEmail}
          sx={{
            border: "1px solid black",
            borderRadius: "6px",
            paddingLeft: 3,
            height: '48px',
            width: '80%',
            backgroundColor: 'white'
          }}
          placeholder="Email"
        />
      </Box>
      <span style={{ margin: '8px 0 8px 10%', color: 'white' }}>Senha</span>
      <Box display="flex" justifyContent='center'>
        <InputBase
          endAdornment={
            <Button onClick={() => setVisibility(!visibility)} className="passwordEye">
              { visibility ? <VisibilityOff fontSize="medium" /> : <Visibility fontSize="medium" /> }
            </Button>
          }
          type={visibility ? "text" : "password"}
          value={pass}
          onChange={handlePassword}
          sx={{
            border: "1px solid black",
            borderRadius: "6px",
            paddingLeft: 3,
            height: '48px',
            width: '80%',
            backgroundColor: 'white'
          }}
          placeholder="Senha"
        />
      </Box>
      <Box className="savepassword">
        <Box className="check">
        <input type="checkbox" name="" id="" />
        <Typography variant="caption" color="#fff">Guardar Senha</Typography>
        </Box>
        <span className="resetpassord">Esqueceu a senha?</span>
      </Box>
      <Button
        disabled={button}
        onClick={() => {
          router.push('/home')
        }}
        sx={{
          display: "flex",
          backgroundColor: '#29B6F6',
          borderRadius: '22px',
          color: 'white',
          height: '48px',
          width: '60%',
          margin: '5% auto',
          fontWeight: '800'
        }}
      >
        Entrar
      </Button>
      <Box display="flex" justifyContent='center'>
        <Typography color='grey'>Não tem uma conta?
        <Button
          onClick={() => {
            router.push('/register')
          }}
          sx={{
            color: "#29B6F6",
          }}
        >
          Crie agora
        </Button>
        </Typography>
      </Box>
    </Box>
  );
}
