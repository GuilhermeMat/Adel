import { Box, Typography } from "@mui/material";
import React from "react";

export default function Paragraph({ number, text }) {
  return (
    <Box sx={{ margin: 0.8, width: "85vw" }}>
      <Box>
        <Typography sx={{ color: "rgba(76, 172, 253, 0.8)", fontWeight: 600, fontSize: 15 }}>
          {number}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", marginLeft: 0.5 }}>
        <Typography sx={{ color: "white", fontStyle: "italic" }}>
          {`"${text}"`}
        </Typography>
      </Box>
    </Box>
  );
}
