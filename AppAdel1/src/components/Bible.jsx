"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { booksOfBible } from "@/service/bibleInfos";
import BookCard from "./BookCard";
import { useLoadingContext } from "@/context/LoadingContext";
import Loading from "./Loading";
import { authentication } from "@/auth";

const BibleSearch = () => {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, setGlobalLoading } = useLoadingContext();

  const getBible = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BIBLE_BASE_URL}/books`,
      {
        headers: {
          "api-key": `${process.env.NEXT_PUBLIC_BIBLE_KEY}`,
        },
      }
    );
    // console.log(response.data.data[167]);
    // const response = await axios.get('https://bible-api.com/apocalipse1?translation=almeida');
    console.log(response);
  };

  useEffect(() => {
    getBible();
  }, []);

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated) {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    setGlobalLoading(false);
  }, []);

  const handleBookChange = (event) => {
    setBook(event.target.value);
  };

  const handleChapterChange = (event) => {
    setChapter(event.target.value);
  };

  const handleVerseChange = (event) => {
    setVerse(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${BibleAPI.baseUrl}/bibles/verse`, {
        headers: {
          "api-key": BibleAPI.apiKey,
        },
        params: {
          bookId: book,
          chapter,
          verse,
        },
      });
      setSearchResult(response.data);
      setError(null);
    } catch (error) {
      setSearchResult(null);
      setError("Erro ao buscar o versículo. Por favor, tente novamente.");
    }
  };

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
      {/* <input
        type="text"
        value={book}
        onChange={handleBookChange}
        placeholder="Digite o nome do livro"
      />
      <input
        type="number"
        value={chapter}
        onChange={handleChapterChange}
        placeholder="Digite o número do capítulo"
      />
      <input
        type="number"
        value={verse}
        onChange={handleVerseChange}
        placeholder="Digite o número do versículo"
      />
      <button onClick={handleSearch}>Pesquisar</button>
      {error && <p>{error}</p>}
      {searchResult && (
        <div>
          <h3>Versículo Encontrado:</h3>
          <p>{searchResult.text}</p>
        </div>
      )} */}
    </Box>
  );
};

export default BibleSearch;
