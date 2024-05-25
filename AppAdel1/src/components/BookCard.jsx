import { Button, Typography } from "@mui/material";
import React from "react";

export default function BookCard({ name, abbrev } ) {
  return (
    <Button
      id={abbrev}
      sx={{
        opacity: "1",
        height: "5vh",
        width: "40vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        border: '1px solid rgba(76, 172, 253, 0.8)',
        margin: 1,
      }}
    >
      <Typography sx={{ color: "white", fontSize: '14px', fontWeight: 600}}>{name}</Typography>
    </Button>
  );
}
