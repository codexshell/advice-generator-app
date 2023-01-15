const baseUrl = "https://api.adviceslip.com/advice";

const getQuote = async () => {
  const response = await fetch(baseUrl, { cache: "no-cache" });
  const data = await response.json();
  return data.slip;
};
export default getQuote;
