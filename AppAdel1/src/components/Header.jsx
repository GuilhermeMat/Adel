'use client'
import { authentication } from "@/auth";
import { decodeUser } from "@/utils";
import { ExitToApp, Person } from "@material-ui/icons";
import { Box, Collapse, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import config from "../img/configuracao.png"
import React, { useEffect, useState } from "react";

export default function Header() {
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
  }, []);

  return (
    <Box className="nav">
      <div
        onClick={() => {
          router.push("/settings");
        }}
        className="config"
      >
        <img src={config.src} alt="Configuração" className="imgconfig" />
      </div>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ right: 15, top: 50, position: "absolute" }}>
          <Collapse
            style={{
              backgroundColor: "white",
              width: "145px",
              borderRadius: "8px 0 8px 8px",
            }}
            in={open}
            // unmountOnExit
            mountOnEnter
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                onClick={() => router.push("/profile")}
                sx={{ width: "80%", margin: "5px auto" }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Person />
                  <Typography sx={{ margin: "7px 0 0 0" }}>
                    Minha conta
                  </Typography>
                </Typography>
              </Box>

              <Box
                onClick={logOut}
                sx={{ width: "90%", padding: 0.3, margin: "0 auto 5px auto" }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography sx={{ marginTop: 0.3 }}>Sair</Typography>
                  <ExitToApp color="error" />
                </Typography>
              </Box>
            </Box>
          </Collapse>
        </Box>
        <Box
          onClick={() => setOpen(!open)}
          className="perfil"
          sx={{
            padding: "15px",
            zIndex: 2,
          }}
        >
          {/* <img src={perfil.src} alt="Perfil" className="imgperfil" /> */}
          <Box
            sx={{
              backgroundColor: "white",
              width: "40px",
              height: "40px",
              borderRadius: open ? "40% 40% 0 0" : "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                margin: "5px 0 0 0",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {nameInitials}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
