"use client";
import { authentication } from "@/auth";
import { useLoadingContext } from "@/context/LoadingContext";
import { booksOfBible } from "@/service/bibleInfos";
import { Alert, Box, Button, InputBase, Slide, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { requestBibleInfos } from "@/service/bibleAPI";
import Paragraph from "./Paragraph";

export default function Search() {
  const [bookName, setBookName] = useState();
  const [chapter, setChapter] = useState();
  const [verse, setVerse] = useState();
  const [cannotSearch, setCannotSearch] = useState(true);
  const [versesList, setVersesList] = useState([]);
  const [compLoading, setCompLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { isLoading, setGlobalLoading } = useLoadingContext();
  const params = useParams();

  const handleChange = (event, callback) => {
    if (parseInt(event.target.value, 10) > 176) {
      callback(176);
      return;
    }
    if (parseInt(event.target.value, 10) < 1) {
      callback(1);
      return;
    }
    callback(event.target.value);
  };

  const treatVerses = (versesList) => {
    if (verse) {
      const findVerse = versesList.filter(
        (vs) => vs.number >= parseInt(verse, 10)
      );
      setVersesList(findVerse);
      return;
    }
    setVersesList(versesList);
  };

  const handleSearch = async () => {
    setCompLoading(true);
    setVerse('');
    setChapter('');
    const { data, msg } = await requestBibleInfos(bookName.abbrev, chapter);
    if (msg) {
      setErrorMsg(msg);
      setCompLoading(false);
      return;
    }
    treatVerses(data.verses);
    setCompLoading(false);
  };
  const getBookName = () => {
    const info = booksOfBible.find((book) => book.abbrev === params.abbrev);
    setBookName(info);
    setGlobalLoading(false);
  };

  useEffect(() => {
    if (chapter && chapter > 0) {
      setCannotSearch(false);
    } else {
      setCannotSearch(true);
    }
  }, [chapter, verse]);

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated === '/') {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    getBookName();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Box>
      {errorMsg && (
        <Slide
          direction="down"
          in={!!errorMsg}
          timeout={800}
          hidden={errorMsg === ""}
          mountOnEnter
          unmountOnExit
          style={{
            position: "absolute",
            top: "30px",
            left: "55px",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: '300px'
          }}
        >
          <Alert severity="error">{errorMsg}</Alert>
        </Slide>
      )}
      <Box>
        <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
          {bookName.name}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px 0 15px 0" }}>
        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <Typography sx={{ color: "white" }}>Capítulo</Typography>
            <InputBase
              value={chapter}
              onChange={(e) => handleChange(e, setChapter)}
              type="number"
              inputProps={{ min: 1, max: 150 }}
              sx={{
                border: "1px solid black",
                borderRadius: "6px",
                paddingLeft: 3,
                height: "48px",
                width: "100%",
                backgroundColor: "white",
              }}
              placeholder="Ex. 5"
            />
          </Box>
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white" }}>Versículo</Typography>
            <InputBase
              value={verse}
              onChange={(e) => handleChange(e, setVerse)}
              type="number"
              sx={{
                border: "1px solid black",
                borderRadius: "6px",
                paddingLeft: 3,
                height: "48px",
                width: "100%",
                backgroundColor: "white",
                marginRight: "5px",
              }}
              placeholder="Ex. 15"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleSearch}
          disabled={cannotSearch}
          variant="outlined"
          sx={{ border: "1px solid rgba(76, 172, 253, 0.8)", color: "white" }}
        >
          Buscar
        </Button>
      </Box>
      <Box
        sx={{
          margin: "10px 0 0 0",
          height: "65vh",
          overflowY: "auto",
          padding: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {compLoading ? (
          <Loading />
        ) : versesList.length ? (
          versesList.map((item) => <Paragraph {...item} />)
        ) : (
          <Typography sx={{ color: "white" }}>Busque um capítulo...</Typography>
        )}
      </Box>
    </Box>
  );
}
