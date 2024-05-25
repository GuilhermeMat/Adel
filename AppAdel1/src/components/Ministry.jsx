'use client'
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoadingContext } from "@/context/LoadingContext";
import Loading from "./Loading";
import { authentication } from "@/auth";

export default function Ministry() {
  const { isLoading, setGlobalLoading } = useLoadingContext()
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated) {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    setGlobalLoading(false)
  }, [])

  if (isLoading) return <Loading />

  return (
    <Box>
      <Box 
        sx={{overflow:"auto"}}
        display="flex"
        alignItems="center"
        flexDirection="column"
        >
        <Box>
            <Box style={{margin:"50px"}}>
                <Typography color='#fff'>Ministério Madureira - Luziânia-GO</Typography>
            </Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">KIDS</Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio tenetur quia cum repudiandae eaque facilis autem nesciunt, ut qui. Pariatur voluptas totam incidunt ratione, sed obcaecati officia non blanditiis.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, margin: "5px 0 0 0"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">MÍDIA</Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio tenetur quia cum repudiandae eaque facilis autem nesciunt, ut qui. Pariatur voluptas totam incidunt ratione, sed obcaecati officia non blanditiis.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, margin: "5px 0 25px 0"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">LOUVOR</Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio tenetur quia cum repudiandae eaque facilis autem nesciunt, ut qui. Pariatur voluptas totam incidunt ratione, sed obcaecati officia non blanditiis.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Box>
        </Box>
    </Box>
  );
}