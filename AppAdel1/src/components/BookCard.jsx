import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function BookCard({ name, abbrev }) {

  return (
    <Link
      href={{
        pathname: `bible/search/${abbrev}`,
      }}
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
          margin: 1,
        }}
      >
        <Typography sx={{ color: "white", fontSize: "14px", fontWeight: 600 }}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
}
