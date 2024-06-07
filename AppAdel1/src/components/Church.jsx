"use client";
import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { authentication } from "@/auth";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { useLoadingContext } from "@/context/LoadingContext";
import { South } from "@mui/icons-material";

function Church() {
  const { isLoading, setGlobalLoading } = useLoadingContext();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated === "/") {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    setGlobalLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ height: "70vh" }}
    >
      <Box sx={{ width: "90%" }}>
        <Box sx={{ textAlign: "center", marginBottom: '5px' }}>
          <Typography
            sx={{
              fontFamily: "Nanum Myeongjo, serif",
              fontSize: 18,
            }}
            color="#fff"
          >
            Venha conhecer nossa igreja! Estamos de braços abertos para te
            acolher!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nanum Myeongjo, serif",
              fontSize: 18,
            }}
            color="#fff"
          >
            Adel - Parque Alvorada 1
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nanum Myeongjo, serif",
              fontSize: 18,
            }}
            color="#fff"
          >
            Ministério Madureira - Luziânia-GO
          </Typography>
          <Box sx={{ height: "40px" }}>
            <South
              className="teste"
              sx={{
                color: "white",
                animation: "slide1 1s ease-in-out infinite;",
                marginTop: "9px",
              }}
            />
          </Box>
        </Box>
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.294559960796!2d-47.926183060944666!3d-16.20528955377342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935999ff0e9c846d%3A0x334513d2399f6d97!2sADEL!5e0!3m2!1spt-BR!2sbr!4v1716080442686!5m2!1spt-BR!2sbr"
            style={{
              width: "100%",
              height: "300",
              borderRadius: "8px",
              marginTop: "0",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box style={{ marginTop: "10px" }}>
            <Typography
              sx={{
                fontFamily: "Nanum Myeongjo, serif",
                fontSize: 20,
                fontWeight: 600,
              }}
              color="#fff"
            >
              Pastores
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nanum Myeongjo, serif",
                fontSize: 18,
              }}
              color="#fff"
            >
              Juliana Bueno & Antônio Marcos
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Church;
