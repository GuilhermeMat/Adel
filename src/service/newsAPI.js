import axios from "axios";

export const createNews = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/news`,
      formData,
      {
        headers: {
          authorization: JSON.parse(localStorage.getItem("token")),
          "Content-Type": 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error on updating", error);
    return error
  }
};

export const showNews = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/news`,
      {
        headers: {
          authorization: JSON.parse(localStorage.getItem("token"))
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error on showing news", error);
    return error.response.data
  }
};
