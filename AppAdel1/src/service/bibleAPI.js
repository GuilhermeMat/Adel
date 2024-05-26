import axios from "axios";

export const requestBibleInfos = async (abbrev, chapter) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BIBLE_BASE_URL}/verses/nvi/${abbrev}/${chapter}`
    );
    return response
  } catch (error) {
    console.log('error ao requisitar informações', error)
    return { msg: 'Erro ao requisitar informações tente novamente mais tarde' }
  }
}