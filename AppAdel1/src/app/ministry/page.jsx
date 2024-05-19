import { Box, Typography } from "@mui/material";

export default function Ministry() {
  return (
    <Box className="pageContainer">
      <Box>
        <Typography
          fontWeight={800}
          variant="h2"
          color="white"
          fontFamily="revert"
          textAlign="center"
          padding="20px"
        >
          Ministérios
        </Typography>
      </Box>
      <Box>
        <Typography
          fontWeight={900}
          fontFamily="revert"
          variant="h3"
          color="white"
          textAlign="center"
        >
          Louvor
        </Typography>
      </Box>
      <Box>
        <Typography
          fontWeight={900}
          fontFamily="revert"
          variant="h3"
          color="white"
          textAlign="center"
        >
          Mídia
        </Typography>
      </Box>
      <Box>
        <Typography
          fontWeight={900}
          fontFamily="revert"
          variant="h3"
          color="white"
          textAlign="center"
        >
          Kids
        </Typography>
      </Box>
    </Box>
  );
}
