'use client'
import { authentication } from "@/auth";
import { useLoadingContext } from "@/context/LoadingContext";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { useEffect } from "react";

export default function Prayer() {
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
    <Box className="pageContainer">
      <Typography variant="h2" color="white">
        Página da Oração
      </Typography>
    </Box>
  );
}
