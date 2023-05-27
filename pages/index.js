import Head from "next/head";
import { Input, InputLeftAddon, InputGroup } from "@chakra-ui/input";
import { Center, Container, HStack } from "@chakra-ui/layout";
import { FaSearch } from "react-icons/fa";
import RecipeList from "../components/recipeList/RecipeList";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";

import { useEffect, useRef, useState } from "react";

export default function Home({ recipes }) {
  const [isLoading, setIsLoading] = useState(false);
  const [recipesData, setRecipes] = useState(recipes);
  const searchRef = useRef();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  useEffect(() => {
    async function getReceipes() {
      try {
        if (!isLoading) {
          return;
        }
        setIsLoading(true);
        const URL = `https://api.edamam.com/search?q=${searchRef.current.value}&app_id=${process.env.NEXT_PUBLIC_DATA_ID}&app_key=${process.env.NEXT_PUBLIC_DATA_KEY}&from=0&to=12`;

        if (searchRef.current.value === "") {
          setIsLoading(false);
          return;
        }

        const response = await axios.get(URL);

        setRecipes(response.data);
        searchRef.current.value = "";
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getReceipes();
  }, [isLoading]);

  return (
    <div className="">
      <Head>
        <title>recipe search</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="container">
        <Center minH="90vh" className="hero">
          <Container>
            <form onSubmit={searchSubmitHandler}>
              <HStack color="gray.600">
                <InputGroup>
                  <InputLeftAddon
                    height="inherit"
                    children={
                      isLoading ? (
                        <Spinner />
                      ) : (
                        <FaSearch
                          size="30px"
                          onClick={searchSubmitHandler}
                          cursor="pointer"
                        />
                      )
                    }
                  />
                  <Input
                    placeholder="Search"
                    type="text"
                    variant="filled"
                    focusBorderColor="transparent"
                    _focus={{ variant: "filled" }}
                    size="lg"
                    fontSize="1.5rem"
                    className="searchInput"
                    boxShadow="dark-lg"
                    isDisabled={isLoading}
                    ref={searchRef}
                  />
                </InputGroup>
              </HStack>
            </form>
          </Container>
        </Center>

        <Container maxW="container.xg" pt="2rem">
          <RecipeList data={recipesData} />
        </Container>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const URL = `https://api.edamam.com/search?q=rice&app_id=${process.env.NEXT_PUBLIC_DATA_ID}&app_key=${process.env.NEXT_PUBLIC_DATA_KEY}&from=0&to=18`;
  const res = await fetch(URL);
  const recipes = await res.json();
  return {
    props: {
      recipes,
    },
  };
}
