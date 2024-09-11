import axios from "axios";

export const requestBibleInfos = async (abbrev, chapter) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BIBLE_BASE_URL}/verses/ra/${abbrev}/${chapter}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BIBLE_USER_TOKEN}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error ao requisitar informações", error);
    return { msg: "Erro ao requisitar informações tente novamente mais tarde" };
  }
};

export const getChaptersLimit = async (abbrev) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BIBLE_BASE_URL}/books/${abbrev}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BIBLE_USER_TOKEN}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error ao requisitar informações sobre o livro", error);
    return { msg: "Erro verifique se este capítulo existe ou tente novamente mais tarde!" };
  }
};
