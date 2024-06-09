"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { booksOfBible } from "@/service/bibleInfos";
import BookCard from "./BookCard";
import { useLoadingContext } from "@/context/LoadingContext";
import Loading from "./Loading";
import { authentication } from "@/auth";

const BibleSearch = () => {
  const [error, setError] = useState(null);
  const { isLoading, setGlobalLoading } = useLoadingContext();

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated === '/') {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    setGlobalLoading(false);
  }, []);

  if (isLoading) return <Loading />

  return (
    <Box
      sx={{
        height: "85vh",
        overflowY: "auto",
        padding: "10px",
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      { booksOfBible.map((book) => <BookCard { ...book } />) }
    </Box>
  );
};

export default BibleSearch;
