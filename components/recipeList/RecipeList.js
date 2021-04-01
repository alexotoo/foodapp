import { SimpleGrid } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import RecipeItem from "./RecipeItem";
import { v4 as uuidv4 } from "uuid";

function RecipeList({ data }) {
  console.log(data);
  const { hits } = data;
  console.log(hits);
  let recipeLists = hits.map((hit) => ({
    id: uuidv4(),
    image: hit.recipe.image,
    url: hit.recipe.url,
    title: hit.recipe.label,
  }));
  console.log(recipeLists);
  return (
    <SimpleGrid minChildWidth="200px" spacing="20px">
      {recipeLists.map((recipe) => {
        return <RecipeItem key={recipe.id} recipe={recipe} />;
      })}
    </SimpleGrid>
  );
}

export default RecipeList;

// {
//   tours.map((tour) => {
//     return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />;
//   });
// }
