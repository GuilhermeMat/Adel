"use client";
import { Alert, Box, Button, InputBase, Slide, Typography } from "@mui/material";
import "../../styles/login.css";
import adel from "../../img/adel.png";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios"

export default function ResgisterPage() {
  const [email, setEmail] = useState("");
  const [button, setButton] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPass(event.target.value);
  };

  const registerRequest = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        nickName: name,
        email,
        password: pass
      })
      if (response.status === 200) {
        localStorage.setItem('token', JSON.stringify(response.data.token))
        router.push('/home')
      }
    } catch (error) {
      console.log('error', error)
      if (error.response.status === 409) {
        setErrorMsg('Email já cadastrado no sistema')
        setTimeout(() => {
          setErrorMsg('')
        }, 3000)
      }
    }
  }

  useEffect(() => {
    const emailValid = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (email.match(emailValid) && pass.length >= 4 && name.length > 6) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [email, pass, name]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      { errorMsg && (
        <Slide
          direction='down'
          in={!!errorMsg}
          timeout={800}
          hidden={errorMsg === ''}
          mountOnEnter
          unmountOnExit
          style={{
            position: 'absolute',
            top: "30px",
            left: "65px",
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <Alert
            severity="error"
          >
            { errorMsg }
          </Alert>
        </Slide>
      ) }
      <Box className="logo">
        <img className="logologin" src={adel.src} alt="" />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography fontWeight={800} variant="h4" color="white">
          Crie sua conta
        </Typography>
      </Box>
      {/* <Box display="flex" justifyContent='center'>
            <Typography variant="h6" color='white'>Acesse sua conta</Typography>
          </Box> */}
      <span style={{ margin: "0 0 8px 10%", color: "white" }}>
        Nome e Sobrenome
      </span>
      <Box display="flex" justifyContent="center">
        <InputBase
          value={name}
          onChange={handleName}
          sx={{
            border: "1px solid black",
            borderRadius: "6px",
            paddingLeft: 3,
            height: "48px",
            width: "80%",
            backgroundColor: "white",
          }}
          placeholder="Nome e Sobrenome"
        />
      </Box>
      <span style={{ margin: "8px 0 8px 10%", color: "white" }}>Email</span>
      <Box display="flex" justifyContent="center">
        <InputBase
          value={email}
          onChange={handleEmail}
          sx={{
            border: "1px solid black",
            borderRadius: "6px",
            paddingLeft: 3,
            height: "48px",
            width: "80%",
            backgroundColor: "white",
          }}
          placeholder="Email"
        />
      </Box>
      <span style={{ margin: "8px 0 8px 10%", color: "white" }}>Senha</span>
      <Box display="flex" justifyContent="center">
        <InputBase
          endAdornment={
            <Button
              onClick={() => setVisibility(!visibility)}
              className="passwordEye"
            >
              {visibility ? (
                <VisibilityOff fontSize="medium" />
              ) : (
                <Visibility fontSize="medium" />
              )}
            </Button>
          }
          type={visibility ? "text" : "password"}
          value={pass}
          onChange={handlePassword}
          sx={{
            border: "1px solid black",
            borderRadius: "6px",
            paddingLeft: 3,
            height: "48px",
            width: "80%",
            backgroundColor: "white",
          }}
          placeholder="Senha"
        />
      </Box>
      <Button
        disabled={button}
        onClick={registerRequest}
        sx={{
          display: "flex",
          backgroundColor: "#29B6F6",
          borderRadius: "22px",
          color: "white",
          height: "48px",
          width: "60%",
          margin: "5% auto",
          fontWeight: "800",
        }}
      >
        Criar conta
      </Button>
      <Box display="flex" justifyContent="center">
        <Typography color="grey">
          Já possui uma conta?
          <Button
            onClick={() => {
              router.push("/");
            }}
            sx={{
              color: "#29B6F6",
            }}
          >
            Acesse aqui
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}