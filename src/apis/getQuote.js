import axios from "axios";
const baseUrl = "https://api.adviceslip.com/advice";

const getQuote = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data.slip;
  } catch (error) {
    console.log(error);
  }
};

export default getQuote;