import { Image } from "@chakra-ui/image";
import Link from "next/link";
import { Spacer } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Badge, Box, Text } from "@chakra-ui/layout";

export default function RecipeItem({ recipe }) {
  const { image, title, id } = recipe;
  console.log(recipe);

  return (
    <Link href={`/${id}`}>
      <a>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          _hover={{ boxShadow: "base" }}
          className="box-1"
        >
          <Image src={image} width="100%" className="cardImage" />

          <HStack p="20px" textDecoration="none">
            <Text fontWeight="bolder" color="gray.600">
              {title}
            </Text>
            <Spacer />
            <Badge
              borderRadius="full"
              px="2"
              color="green.500"
              bg="gray.300"
              className="badge"
            >
              Eatify
            </Badge>
          </HStack>
        </Box>
      </a>
    </Link>
  );
}
