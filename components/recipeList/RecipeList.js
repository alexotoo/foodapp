import { SimpleGrid } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import RecipeItem from "./RecipeItem";
import { v4 as uuidv4 } from "uuid";

function RecipeList({ data }) {
  const { hits } = data;

  let recipeLists = hits.map((hit) => ({
    id: uuidv4(),
    image: hit.recipe.image,
    title: hit.recipe.label,
    ingredientLines: hit.recipe.ingredientLines,
    url: hit.recipe.url,
  }));

  return (
    <SimpleGrid minChildWidth="200px" spacing="20px">
      {recipeLists.map((recipe) => {
        return <RecipeItem key={recipe.id} recipe={recipe} />;
      })}
    </SimpleGrid>
  );
}

export default RecipeList;
