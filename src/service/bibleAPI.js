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
