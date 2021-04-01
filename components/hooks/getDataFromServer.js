import { useQuery } from "react-query";
import axios from "axios";

export default function getDataFromServer(recipe) {
  const searchWord = recipe;
  async function getReceipes() {
    const URL = `https://api.edamam.com/search?q=pizza&app_id=${process.env.NEXT_PUBLIC_DATA_ID}&app_key=${process.env.NEXT_PUBLIC_DATA_KEY}&from=0&to=12`;
    const response = await axios.get(URL);
    // console.log(response);
    return response;
  }
  return useQuery("recipedata", getReceipes);
}
