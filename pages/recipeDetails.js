import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { BsArrowRight } from "react-icons/bs";
import { Box, Center, Container, Flex, Text, VStack } from "@chakra-ui/layout";

import { useEffect, useState } from "react";

export default function recipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("recipepage"));
    setRecipeDetails(data);
  }, []);
  const Ingredients = Array(recipeDetails.ingredientLines)
    .toString()
    .split(",");

  return (
    <Box width="100%" minHeight="90vh" pt="4rem">
      <Center paddingY="1rem">
        <Text textAlign="center" paddingX="10px" className="logo">
          {recipeDetails.title}
        </Text>
      </Center>
      <VStack paddingX="2rem">
        <Center height="50vh" width="80%">
          <Image
            src={recipeDetails.image}
            width={{ sm: "100%", md: "50%" }}
            height="100%"
            className="ImgDetails"
          />
        </Center>
        <Box flex="1" textAlign="center">
          <Text fontSize="4xl" fontWeight="bold" color="teal">
            Ingredients
          </Text>

          {Ingredients.map((ing, index) => (
            <Text
              key={index}
              fontSize="1xl"
              fontWeight="bold"
              fontStyle="italic"
              color="teal"
            >
              {ing}
            </Text>
          ))}
        </Box>
        <Button
          rightIcon={<BsArrowRight />}
          colorScheme="teal"
          variant="outline"
        >
          <a href={recipeDetails.url} target="_blank">
            Read More
          </a>
        </Button>
      </VStack>
    </Box>
  );
}
