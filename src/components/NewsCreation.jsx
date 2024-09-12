import { Box, Button, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { createNews, showNews } from "@/service/newsAPI";

const NewsCreation = ({ newsList, addNews, itsAdm }) => {
  const [fileName, setFileName] = useState();
  const [btnDisable, setBtnDisable] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prepareFile, setPrepareFile] = useState();
  const [img, setImg] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setPrepareFile(file)
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
    }
  };

  const getNews = async () => {
    const result = await showNews();
    if (result.message === 'News not found') {
      addNews([])
    }
    if (result?.data?.message.length) {
      addNews(result?.data?.message)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  useEffect(() => {
    if (img && title && description) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [img, title, description]);

  const handleNewsCreation = async () => {
    const newList = JSON.parse(JSON.stringify(newsList))
    const newInfo = {
      title,
      src: img,
      description,
    }
    const formData = new FormData();
    formData.append('title', newInfo.title); 
    formData.append('description', newInfo.description);
    formData.append('img', prepareFile);
    const result = await createNews(formData)
    newList.push(newInfo)
    addNews(newList)
    setImg("");
    setTitle("");
    setDescription("");
    setFileName("");
  };

  if (!itsAdm) return <></>

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: img ? "260px" : "180px",
      }}
    >
      <Input
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: 0.5,
          width: "250px",
        }}
        placeholder="Título da Notícia"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {img && (
          <Box
            sx={{
              borderRadius: "8px",
              overflow: "hidden",
              width: 140,
              height: 100,
              margin: "1% 2% 0 14%",
            }}
          >
            <Image width={140} height={100} src={img} />
          </Box>
        )}
        <Box
          sx={{
            margin: img ? "25px 0 0 0" : "0",
          }}
        >
          <label htmlFor="file-upload">
            <Button
              variant="contained"
              component="span"
              sx={{
                backgroundColor: "rgba(76, 172, 253, 0.8)",
              }}
            >
              {fileName ? fileName : "Escolha imagem da Notícia"}
            </Button>
          </label>

          {/* Input escondido */}
          <Input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            sx={{ display: "none" }} // Escondendo o input padrão
          />

          {/* Exibindo o nome do arquivo após seleção */}
          {fileName && (
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Arquivo Selecionado: {fileName}
            </Typography>
          )}
        </Box>
      </Box>
      <Input
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: 0.5,
          width: "250px",
          height: "60px",
          overflowY: "scroll",
          wordWrap: "break-word",
        }}
        multiline
        placeholder="Descrição..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        disabled={btnDisable}
        onClick={handleNewsCreation}
        sx={{
          backgroundColor: "rgba(76, 172, 253, 0.8)",
        }}
      >
        Criar Notícia
      </Button>
      <Divider sx={{ border: "1px solid grey" }} />
    </Box>
  );
};

export default NewsCreation;
