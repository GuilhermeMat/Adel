"use client";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  InputBase,
  Slide,
  Typography,
  styled,
} from "@mui/material";
import adel from "../img/adel.png";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";
import { verifyUser } from "@/utils";
import Loading from "./Loading";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [button, setButton] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [passwordCheckbox, setPasswordCheckbox] = useState(false);
  const [pass, setPass] = useState("");

  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
      borderRadius: "3px", // Ajuste do raio da borda
      border: "0.5px solid white", // Cor da borda
      color: "transparent", // Para garantir que a cor interna não apareça
      height: "14px",
      width: "14px",
    },
    "&.Mui-checked .MuiSvgIcon-root": {
      border: "0.5px solid white", // Cor da borda quando checado
      // backgroundColor: "white", // Cor de fundo quando checado
      color: theme.palette.primary.main, // Cor do ícone checado
      height: "14px",
      width: "14px",
    },
  }));

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPass(event.target.value);
  };

  const requestLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          email,
          password: pass,
        }
      );
      if (response.status === 200) {
        if (passwordCheckbox) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
        } else {
          sessionStorage.setItem("token", JSON.stringify(response.data.token))
        }
        router.push("/home");
      }
    } catch (error) {
      console.log("error", error);
      if (error.response.status === 404 || error.response.status === 400) {
        setErrorMsg("Email ou senha incorretos");
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const emailValid = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (email.match(emailValid) && pass.length >= 4) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [email, pass]);

  useEffect(() => {
    const isTokenExist = JSON.parse(localStorage.getItem("token"));
    if (isTokenExist && verifyUser(isTokenExist)) {
      router.push("/home");
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        sx={{
          height: "99.5vh",
        }}
      >
        {errorMsg && (
          <Slide
            direction="down"
            in={!!errorMsg}
            timeout={800}
            hidden={errorMsg === ""}
            mountOnEnter
            unmountOnExit
            style={{
              position: "absolute",
              top: "30px",
              left: "65px",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <Alert severity="error">{errorMsg}</Alert>
          </Slide>
        )}
        <Box className="logo">
          <img className="logologin" src={adel.src} alt="" />
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography fontWeight={800} variant="h4" color="white">
            Bem Vindo
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h6" color="white">
            Acesse sua conta
          </Typography>
        </Box>
        <span style={{ margin: "0 0 8px 10%", color: "white" }}>Email</span>
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
        <Box className="savepassword">
          <Box className="check">
            {/* <input type="checkbox" /> */}
            <FormControlLabel
              sx={{ width: "20px", height: "10px" }}
              control={
                <CustomCheckbox
                  checked={passwordCheckbox}
                  onChange={() => setPasswordCheckbox(!passwordCheckbox)}
                />
              }
              label="Custom Checkbox"
            />
            {/* <Checkbox
              sx={{
                backgroundColor: "white",
                borderRadius: "0px",
                height: "10px",
                width: "10px",
              }}
              size="small"
            /> */}
            <Typography variant="caption" color="#fff" margin="0 0 0 8px">
              Guardar Senha
            </Typography>
          </Box>
          {/* <span className="resetpassord">Esqueceu a senha?</span> */}
        </Box>
        <Button
          disabled={button}
          onClick={requestLogin}
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
          Entrar
        </Button>
        <Box display="flex" justifyContent="center">
          <Typography color="grey">
            Não tem uma conta?
            <Button
              onClick={() => {
                router.push("/register");
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
}
