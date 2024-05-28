"use client";
import { authentication } from "@/auth";
import { useLoadingContext } from "@/context/LoadingContext";
import { Box, InputBase, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { useEffect } from "react";

export default function Prayer() {
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
    <Box sx={{
      height:"90vh"
    }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "700",
        }}
        variant="h2"
        color="white"
      >
        Oração
      </Typography>
      <Typography sx={{ margin: "8px 0 5px 10%", color: "white" }}>Nome do abençoado</Typography>
      <Box display="flex" justifyContent="center">
        <InputBase
          // value={email}
          // onChange={handleEmail}
          sx={{
            border: "1px solid black",
            borderRadius: "6px",
            paddingLeft: 3,
            height: "48px",
            width: "80%",
            backgroundColor: "white",
          }}
          placeholder="Nome"
        />
      </Box>
      <Typography sx={{ margin: "8px 0 5px 10%", color: "white" }}>Finalidade da oração (opcional)</Typography>
      <Box display="flex" justifyContent="center">
        <InputBase
          // value={email}
          // onChange={handleEmail}
          sx={{
            border: "1px solid black",
            borderRadius: "6px",
            paddingLeft: 3,
            height: "100px",
            width: "80%",
            backgroundColor: "white",
          }}
          placeholder="Descrição"
        />
      </Box>
    </Box>
  );
}
