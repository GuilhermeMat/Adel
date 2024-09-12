"use client";
import { authentication } from "@/auth";
import { useLoadingContext } from "@/context/LoadingContext";
import { Box, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import NewsCreation from "./NewsCreation";
import Image from "next/image";
import { decodeUser } from "@/utils";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [itsAdm, setItsAdm] = useState();
  const { isLoading, setGlobalLoading } = useLoadingContext();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated === "/") {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    const result = decodeUser(JSON.parse(localStorage.getItem("token")));
    if (result.id === `${process.env.NEXT_PUBLIC_SUPER_USER}`) {
      setItsAdm(true);
    }
    setGlobalLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Box
      sx={{
        height: "85vh",
        overflowY: "auto",
      }}
    >
      <Box>
        <NewsCreation newsList={newsList} addNews={setNewsList} itsAdm={itsAdm} />
      </Box>
      {newsList.length
        ? newsList.map((news) => (
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ color: "white", fontSize: "20px", fontWeight: 600 }}
              >
                {news.title}
              </Typography>
              <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  width: 320,
                  height: 250,
                  margin: "1% 0",
                }}
              >
                <Image width={320} height={250} src={news.src} />
              </Box>
              <Typography
                sx={{ color: "white", width: "300px", textAlign: "justify" }}
              >
                {news.description}
              </Typography>
            </Box>
          ))
        : null}
    </Box>
  );
}
