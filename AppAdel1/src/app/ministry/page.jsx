import { Box, Typography } from "@mui/material";

export default function Ministry() {
    return (
        <Box
            className="pageContainer"
        >
            <Typography variant='h2' color='white'>Ministérios</Typography>
            <Box>
                <Typography fontWeight={900} fontFamily='revert' variant="h4" color='white'>Louvor</Typography>
            </Box>
            <Box>
                <Typography color='white'>Mídia</Typography>
            </Box>
            <Box>
                <Typography color='white'>Kids</Typography>
            </Box>
        </Box>
      );
}