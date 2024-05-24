import axios from "axios";
import { headers } from "next/headers";

export const updateUser = async (user) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/update`,
      {
        ...user,
      },
      {
        headers: { authorization: JSON.parse(localStorage.getItem("token")) },
      }
    );
    return response;
  } catch (error) {
    console.log("Error on updating", error);
  }
};
