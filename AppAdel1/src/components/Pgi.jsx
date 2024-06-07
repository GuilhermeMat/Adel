"use client";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useLoadingContext } from "@/context/LoadingContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authentication } from "@/auth";
import Loading from "./Loading";
import Image from "next/image";
import jovensimg from "../img/jovens.png";
import varoesimg from "../img/varoes.png";
import irmasimg from "../img/irmas.png";
import adolecentesimg from "../img/adolecentes.png";

export default function Pgi() {
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
    <Box
      sx={{ overflow: "auto" }}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        sx={{
          height: "85vh",
          padding: "10px",
        }}
      >
        <Box style={{ margin: "50px" }}>
          <Typography color="#fff">
            Ministério Madureira - Luziânia-GO
          </Typography>
        </Box>
        <Card sx={{ maxWidth: 345, margin: "0px 0 10px 0" }}>
          <CardActionArea>
            <Image
              height="240"
              width="345"
              src={jovensimg.src}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                fontWeight={700}
                fontFamily="serif"
              >
                Jovens
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam optio tenetur quia cum repudiandae eaque facilis autem
                nesciunt, ut qui. Pariatur voluptas totam incidunt ratione, sed
                obcaecati officia non blanditiis.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px 0 10px 0" }}>
          <CardActionArea>
            <Image
              height="260"
              width="345"
              src={varoesimg.src}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                fontWeight={700}
                fontFamily="serif"
              >
                Varões
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam optio tenetur quia cum repudiandae eaque facilis autem
                nesciunt, ut qui. Pariatur voluptas totam incidunt ratione, sed
                obcaecati officia non blanditiis.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px 0 10px 0" }}>
          <CardActionArea>
            <Image
              height="260"
              width="345"
              src={irmasimg.src}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                fontWeight={700}
                fontFamily="serif"
              >
                Irmãs
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam optio tenetur quia cum repudiandae eaque facilis autem
                nesciunt, ut qui. Pariatur voluptas totam incidunt ratione, sed
                obcaecati officia non blanditiis.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px 0 25px 0" }}>
          <CardActionArea>
            <Image
              height="260"
              width="345"
              src={adolecentesimg.src}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                fontWeight={700}
                fontFamily="serif"
              >
                Adolecentes
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam optio tenetur quia cum repudiandae eaque facilis autem
                nesciunt, ut qui. Pariatur voluptas totam incidunt ratione, sed
                obcaecati officia non blanditiis.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
