import { useLoadingContext } from "@/context/LoadingContext";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function BookCard({ name, abbrev }) {
  const { setGlobalLoading } = useLoadingContext()

  return (
    <Link style={{textDecoration:"none"}}
      href={{
        pathname: `bible/search/${abbrev}`,
      }}
      onClick={() => setGlobalLoading(true)}
    >
      <Box
        id={abbrev}
        sx={{
          opacity: "1",
          height: "5vh",
          width: "40vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          border: "1px solid rgba(76, 172, 253, 0.8)",
          margin: 1
        }}
      >
        <Typography sx={{ color: "white", fontSize: "14px", fontWeight: 600 }}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
}
