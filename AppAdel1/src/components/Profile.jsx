"use client";
import { Create, Visibility, VisibilityOff } from "@material-ui/icons";
import {
  Alert,
  Box,
  Button,
  InputBase,
  Slide,
  Typography,
} from "@mui/material";
import adel from "../img/adel.png";
import { useEffect, useState } from "react";
import { authentication } from "@/auth";
import { useRouter } from "next/navigation";
import { useLoadingContext } from "@/context/LoadingContext";
import Loading from "./Loading";
import { decodeUser } from "@/utils";
import { updateUser } from "@/service/userAPI";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [disableEmail, setDisableEmail] = useState(true);
  const [name, setName] = useState("");
  const [disableName, setDisableName] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [pass, setPass] = useState("");
  const [updateInfo, setUpdateInfo] = useState(["", ""]);
  const [disablePass, setDisablePass] = useState(true);
  const [originalInfos, setOriginalInfos] = useState({});
  const [allInfosInvalid, setAllInfosInvalid] = useState(true);
  const { setGlobalLoading, isLoading } = useLoadingContext();
  const router = useRouter();

  const fillUserInfos = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = decodeUser(token);
    setName(decoded.name);
    setEmail(decoded.email);
    const originalData = {
      name: decoded.name,
      email: decoded.email,
    };
    setOriginalInfos(originalData);
  };

  const compareData = () => {
    const obj = {};
    if (email.toLocaleLowerCase() !== originalInfos.email.toLocaleLowerCase()) {
      obj.email = email;
    }
    if (pass.length) {
      obj.password = pass;
    }
    if (name.toLocaleLowerCase() !== originalInfos.name.toLocaleLowerCase()) {
      obj.nickName = name;
    }
    return obj;
  };

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated) {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    fillUserInfos();
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

  const resetFields = () => {
    setDisableEmail(true);
    setDisableName(true);
    setDisablePass(true);
  }

  const updateInfos = async () => {
    const cleanObj = compareData();
    const keys = Object.keys(cleanObj);
    if (!keys.length) {
      setUpdateInfo(["Informações iguas as anteriores", "info"]);
    } else {
      const response = await updateUser(cleanObj)
      if (response.status === 200)
      resetFields()
      localStorage.setItem('token', JSON.stringify(response.data.token))
      setUpdateInfo(
        keys > 1
          ? ["Dados atualizados com sucesso!", "success"]
          : ["Dado Atualizado com sucesso", "success"]
      );
    }
    setTimeout(() => {
      setUpdateInfo(['', ''])
    }, 2000)
  };

  useEffect(() => {
    if (!disableEmail || !disableName || !disablePass) {
      setAllInfosInvalid(false);
    } else {
      setAllInfosInvalid(true);
    }
  }, [disableEmail, disableName, disablePass]);

  if (isLoading) return <Loading />;

  return (
    <Box
      className="pageContainer"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      {updateInfo[0].length && updateInfo[1].length && (
        <Slide
          direction="down"
          in={!!updateInfo}
          timeout={800}
          hidden={updateInfo === ""}
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
          <Alert severity="success">{updateInfo[0]}</Alert>
        </Slide>
      )}
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
        disabled={allInfosInvalid}
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
