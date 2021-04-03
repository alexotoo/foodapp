import Head from "next/head";
import { Input, InputLeftAddon, InputGroup } from "@chakra-ui/input";
import { Center, Container, HStack } from "@chakra-ui/layout";
import { FaSearch } from "react-icons/fa";
import RecipeList from "../components/recipeList/RecipeList";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";

import { useEffect, useState } from "react";

export default function Home({ recipes }) {
  const [searchWord, setSearchWord] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipesData, setRecipes] = useState(recipes);

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setSearchWord(search);
    setIsLoading(true);
  };

  useEffect(() => {
    async function getReceipes(searchWord) {
      try {
        if (search === "") {
          return;
        }
        const URL = `https://api.edamam.com/search?q=${searchWord}&app_id=${process.env.NEXT_PUBLIC_DATA_ID}&app_key=${process.env.NEXT_PUBLIC_DATA_KEY}&from=0&to=12`;

        const response = await axios.get(URL);

        setRecipes(response.data);
        setSearch("");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getReceipes(searchWord);
  }, [searchWord]);

  return (
    <div className="">
      <Head>
        <title>recipe search</title>
        <link rel="icon" href="/favicon.ico" />
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
                    type="search"
                    variant="filled"
                    focusBorderColor="transparent"
                    _focus={{ variant: "filled" }}
                    size="lg"
                    fontSize="1.5rem"
                    className="searchInput"
                    boxShadow="dark-lg"
                    value={search}
                    onChange={searchChangeHandler}
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
  const URL = `https://api.edamam.com/search?q=beef&app_id=${process.env.NEXT_PUBLIC_DATA_ID}&app_key=${process.env.NEXT_PUBLIC_DATA_KEY}&from=0&to=12`;
  const res = await fetch(URL);
  const recipes = await res.json();
  return {
    props: {
      recipes,
    },
  };
}
