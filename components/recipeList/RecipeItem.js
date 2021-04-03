import { Image } from "@chakra-ui/image";

import { Spacer } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Badge, Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";

export default function RecipeItem({ recipe }) {
  const router = useRouter();
  const { image, title, url, ingredientLines } = recipe;

  const getRecipeDetials = (image, title, url, ingredientLines) => {
    const details = { image, title, url, ingredientLines };
    sessionStorage.setItem("recipepage", JSON.stringify(details));
    router.push("/recipeDetails");
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: "base" }}
      className="box-1"
      cursor="pointer"
      onClick={() => getRecipeDetials(image, title, url, ingredientLines)}
    >
      <Image src={image} width="100%" className="cardImage" />
      <Badge
        borderRadius="full"
        px="2"
        ml="4"
        my="2"
        color="green.500"
        bg="gray.300"
        className="badge"
      >
        Eatify
      </Badge>
      <HStack textDecoration="none">
        <Text px="2" ml="2" fontWeight="bolder" color="gray.600">
          {title}
        </Text>
      </HStack>
    </Box>
  );
}
