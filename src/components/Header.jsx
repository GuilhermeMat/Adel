"use client";
import { authentication } from "@/auth";
import { decodeUser } from "@/utils";
import { ArrowBack, ExitToApp, Person } from "@material-ui/icons";
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useLoadingContext } from "@/context/LoadingContext";
import { useUserContext } from "@/context/UserContext";

export default function Header() {
  const [nameInitials, setNameInitials] = useState("US");
  const [open, setOpen] = useState(false);
  const { setGlobalLoading } = useLoadingContext();
  const { infosChanged } = useUserContext();
  const router = useRouter();
  const pathName = usePathname();

  const treatUserName = (nick) => {
    const listName = nick.split(" ");
    if (listName.length > 1) {
      return `${listName[0][0]}${listName[1][0]}`;
    } else {
      return `${listName[0][0]}`;
    }
  };

  const logOut = () => {
    setGlobalLoading(true);
    setOpen(!open);
    localStorage.removeItem('token');
    router.push("/");
  };

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated === "/") {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    const { name } = decodeUser(isAuthenticated);
    setNameInitials(treatUserName(name));
  }, [infosChanged]);

  return (
    <Box className="nav">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          justifyContent: pathName === "/home" ? "flex-end" : "space-between",
        }}
      >
        {pathName !== "/home" && (
          <Button
            onClick={() => {
              setGlobalLoading(true);
              router.push("/home");
            }}
            disabled={nameInitials === "US"}
            className="config"
            sx={{ marginTop: "-2px", color: "white" }}
          >
            <ArrowBack fontSize="large" />
          </Button>
        )}
        <Box sx={{ display: "flex" }}>
          <Box sx={{ right: 15, top: 50, position: "absolute" }}>
            <Collapse
              style={{
                backgroundColor: "white",
                width: "145px",
                borderRadius: "8px 0 8px 8px",
              }}
              in={open}
              mountOnEnter
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  onClick={() => {
                    setOpen(!open);
                    setGlobalLoading(true);
                    router.push("/profile");
                  }}
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
                {nameInitials === "US" ? (
                  <CircularProgress sx={{ color: "black" }} size={18} />
                ) : (
                  nameInitials
                )}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
