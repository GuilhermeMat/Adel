"use client";
import { Create, Visibility, VisibilityOff } from "@material-ui/icons";
import { Box, Button, InputBase, Typography } from "@mui/material";
import adel from "../img/adel.png";
import { useEffect, useState } from "react";
import { authentication } from "@/auth";
import { useRouter } from "next/navigation";
import { useLoadingContext } from "@/context/LoadingContext";
import Loading from "./Loading";
import { decodeUser } from "@/utils";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [disableEmail, setDisableEmail] = useState(true);
  const [name, setName] = useState("");
  const [disableName, setDisableName] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [pass, setPass] = useState("");
  const [disablePass, setDisablePass] = useState(true);
  const [originalInfos, setOriginalInfos] = useState({})
  const { setGlobalLoading, isLoading } = useLoadingContext();
  const router = useRouter();

  const fillUserInfos = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const decoded = decodeUser(token)
    setName(decoded.name)
    setEmail(decoded.email)
    const originalData = {
      name: decoded.name,
      email: decoded.email
    }
    setOriginalInfos(originalData)
  }

  const compareData = () => {

  }

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated) {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    fillUserInfos()
    setGlobalLoading(false);
  }, []);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPass(event.target.value);
  };

  const updateInfos = () => {
    const cleanObj = compareData()
  };

  if (isLoading) return <Loading />

  return (
    <Box
      className="pageContainer"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Box className="logo">
        <img className="logologin" src={adel.src} alt="" />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography fontWeight={800} variant="h4" color="white">
          Altere seus dados
        </Typography>
      </Box>
      <span style={{ margin: "0 0 8px 10%", color: "white" }}>
        Nome e Sobrenome
      </span>
      <Box display="flex" justifyContent="center">
        <InputBase
          disabled={disableName}
          endAdornment={
            <Button onClick={() => setDisableName(!disableName)}>
              <Create fontSize="small" />
            </Button>
          }
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
          placeholder="Alterar Nome"
        />
      </Box>
      <span style={{ margin: "8px 0 8px 10%", color: "white" }}>Email</span>
      <Box display="flex" justifyContent="center">
        <InputBase
          disabled={disableEmail}
          endAdornment={
            <Button onClick={() => setDisableEmail(!disableEmail)}>
              <Create fontSize="small" />
            </Button>
          }
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
          placeholder="Alterar Email"
        />
      </Box>
      <span style={{ margin: "8px 0 8px 10%", color: "white" }}>Senha</span>
      <Box display="flex" justifyContent="center">
        <InputBase
          disabled={disablePass}
          endAdornment={
            <Box sx={{ display: "flex", width: "150px" }}>
              <Button
                onClick={() => setVisibility(!visibility)}
                className="passwordEye"
                sx={{ marginRight: "-25px" }}
              >
                {visibility ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </Button>
              <Button onClick={() => setDisablePass(!disablePass)}>
                <Create fontSize="small" />
              </Button>
            </Box>
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
          placeholder="Alterar Senha"
        />
      </Box>
      <Button
        disabled
        onClick={updateInfos}
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
        Salvar
      </Button>
    </Box>
  );
}
