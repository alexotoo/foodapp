import { Container } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function recipeDetails() {
  const [recipeDetials, setRecipeDetails] = useState({});
  const router = useRouter();

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("recipepage"));
    console.log(data);
    setRecipeDetails(data);
  }, []);
  return (
    <Container width="100%" minHeight="90vh" bg="blue" pt="4rem">
      <h1>{recipeDetials.title}</h1>
    </Container>
  );
}
