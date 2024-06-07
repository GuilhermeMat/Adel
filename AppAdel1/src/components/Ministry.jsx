"use client";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoadingContext } from "@/context/LoadingContext";
import Loading from "./Loading";
import { authentication } from "@/auth";
import Image from "next/image";
import kidsimg from "../img/kids.png";
import louvorimg from "../img/louvor.png";
import midiaimg from "../img/midia.png";

export default function Ministry() {
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
    <Box>
      <Box
        sx={{ overflow: "auto", height: "85vh", padding: "10px" }}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box sx={{ overflowY: "auto", height: "85vh" }}>
          <Box style={{ margin: "50px" }}>
            <Typography color="#fff">
              Ministério Madureira - Luziânia-GO
            </Typography>
          </Box>
          <Card sx={{ maxWidth: 345, margin:"0px 0 10px 0" }}>
            <CardActionArea>
              <Image
                height="230"
                width="345"
                src={kidsimg.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  fontFamily="serif"
                >
                  KIDS
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam optio tenetur quia cum repudiandae eaque facilis
                  autem nesciunt, ut qui. Pariatur voluptas totam incidunt
                  ratione, sed obcaecati officia non blanditiis.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "10px 0 10px 0" }}>
            <CardActionArea>
              <Image
                height="260"
                width="345"
                src={midiaimg.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  fontFamily="serif"
                >
                  MÍDIA
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam optio tenetur quia cum repudiandae eaque facilis
                  autem nesciunt, ut qui. Pariatur voluptas totam incidunt
                  ratione, sed obcaecati officia non blanditiis.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "10px 0 25px 0" }}>
            <CardActionArea>
              <Image
                height="260"
                width="345"
                src={louvorimg.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  fontFamily="serif"
                >
                  LOUVOR
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam optio tenetur quia cum repudiandae eaque facilis
                  autem nesciunt, ut qui. Pariatur voluptas totam incidunt
                  ratione, sed obcaecati officia non blanditiis.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
