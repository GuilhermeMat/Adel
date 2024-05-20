"use client";
import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { authentication } from "@/auth";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { useLoadingContext } from "@/context/LoadingContext";

function Church() {
  const { isLoading, setGlobalLoading } = useLoadingContext();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated) {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    setGlobalLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Box
      className="pageContainer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box>
        <Box sx={{ textAlign: "center", margin: "0 0 20px 0" }}>
          <Typography color="#fff">Adel - Parque Alvorada 1</Typography>
          <Typography color="#fff">
            Ministério Madureira - Luziânia-GO
          </Typography>
        </Box>
        <Box>
          <Box sx={{ textAlign: "center", margin: "0 0 20px 0" }}>
            <Typography color="#fff">Adel - Parque Alvorada 1</Typography>
            <Typography color="#fff">
              Ministério Madureira - Luziânia-GO
            </Typography>
          </Box>
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.294559960796!2d-47.926183060944666!3d-16.20528955377342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935999ff0e9c846d%3A0x334513d2399f6d97!2sADEL!5e0!3m2!1spt-BR!2sbr!4v1716080442686!5m2!1spt-BR!2sbr"
              style={{
                width: "100%",
                height: "300",
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              }}
            ></iframe>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box style={{ margin: "50px" }}>
              <Typography color="#fff">Pastor - Antônio Marcos</Typography>
              <Typography color="#fff">Pastora - Juliana Bueno</Typography>
            </Box>
          </Box>
        </Box>
            {" "}
      </Box>
    </Box>
  );
}

export default Church;
