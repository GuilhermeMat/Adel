import { Box, Typography } from "@mui/material";

export default function Church() {
  return (
    
    <Box
        className="pageContainer"
        display="flex"
        alignItems="center"
        flexDirection="column"
    >
        <Typography variant='h2' color='white'>Igreja</Typography>

        <Box>
            <Box style={{margin:"50px"}}>
                <Typography color='#fff'>Adel - Parque Alvorada 1</Typography>
                <Typography color='#fff'>Ministério Madureira - Luziânia-GO</Typography>
            </Box>
            <Box>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.294559960796!2d-47.926183060944666!3d-16.20528955377342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935999ff0e9c846d%3A0x334513d2399f6d97!2sADEL!5e0!3m2!1spt-BR!2sbr!4v1716080442686!5m2!1spt-BR!2sbr" style={{width:"90%", height:"300", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
            </Box>
            <Box>
                <Box>
                    <Typography color='#fff'>Pastor - Antônio Marcos</Typography>
                    <Typography color='#fff'>Pastora - Juliana Bueno</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}
