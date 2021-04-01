import Head from "next/head";
import { data as data1 } from "../data";
import { Input } from "@chakra-ui/input";
import { Center, Container, HStack } from "@chakra-ui/layout";
import { FaSearch } from "react-icons/fa";
import RecipeList from "../components/recipeList/RecipeList";
import { v4 as uuidv4 } from "uuid";
import getDataFromServer from "../components/hooks/getDataFromServer";
import { useState } from "react";

export default function Home() {
  // const [allreceips, SetAllReceips] = useState(data1.hits);
  const { isLoading, error, data } = getDataFromServer();

  // console.log(allreceips);

  // let recipeList = allreceips.map((hit) => ({
  //   id: uuidv4(),
  //   image: hit.recipe.image,
  //   url: hit.recipe.url,
  //   title: hit.recipe.label,
  // }));
  // console.log(recipeList);
  console.log(isLoading, error, data);

  return (
    <div className="">
      <Head>
        <title>recipe search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Center minH="90vh" className="hero">
          <Container>
            <HStack color="gray.600">
              <FaSearch size="30px" />
              <Input
                placeholder="Search"
                variant="filled"
                focusBorderColor="transparent"
                _focus={{ variant: "filled" }}
                size="lg"
                fontSize="1.5rem"
                className="searchInput"
                boxShadow="dark-lg"
              />
            </HStack>
          </Container>
        </Center>
        {isLoading ? (
          <span>Loading</span>
        ) : (
          <Container maxW="container.xg" pt="2rem">
            <RecipeList data={data.data} />
          </Container>
        )}
      </main>
    </div>
  );
}
