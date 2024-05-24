"use client";
import { Create, Visibility, VisibilityOff } from "@material-ui/icons";
import { Box, Button, InputBase, Typography } from "@mui/material";
import adel from "../../img/adel.png";
import { useState } from "react";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [pass, setPass] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPass(event.target.value);
  };

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
          endAdornment={
            <Button>
              <Create fontSize="medium" />
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
          endAdornment={
            <Button>
              <Create fontSize="medium" />
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
          placeholder="Alterar Senha"
        />
      </Box>
    </Box>
  );
}
