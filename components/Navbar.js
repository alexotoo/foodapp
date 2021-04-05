import Link from "next/link";

import { Flex, Center, Text, Circle, HStack, Spacer } from "@chakra-ui/layout";
import {
  FaSearch,
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import LoginLogoutLinks from "./LoginLogoutLinks";
import NavDrawer from "./NavDrawer";
import { GiGreenhouse } from "react-icons/gi";

export default function Navbar() {
  return (
    <Flex
      color="white"
      w="100%"
      bg="white"
      h="70px"
      px="2rem"
      boxShadow="base"
      position="fixed"
      zIndex="999"
    >
      <HStack>
        <Center>
          <NavDrawer />
        </Center>
        <Center
          color="gray.400"
          display={{ sm: "none", md: "inherit" }}
          ml="10px"
          _hover={{ color: "gray.500" }}
        >
          <FaHeart size="30px" />
        </Center>
        <Center>
          <LoginLogoutLinks />
        </Center>
      </HStack>
      <Spacer />
      <Center color="green.500">
        <Link href="/">
          <a className="logo" _hover={{ textDecoration: "none" }}>
            Eatify
          </a>
        </Link>
      </Center>
      <Spacer />

      <HStack color="gray.400">
        <Center color="gray.400" display={{ sm: "inherit", md: "none" }}>
          <FaHeart size="30px" />
        </Center>
        <HStack display={{ sm: "none", md: "inherit" }}>
          <Text color="gray.400" fontWeight="bolder">
            Follow
          </Text>
          <Circle
            size="30px"
            color="white"
            bg="green.500"
            _hover={{ bg: "green.600" }}
          >
            <a href="#">
              {" "}
              <FaFacebook />
            </a>
          </Circle>
          <Circle
            size="30px"
            color="white"
            bg="green.500"
            _hover={{ bg: "green.600" }}
          >
            <a href="#">
              <FaInstagram />
            </a>
          </Circle>
          <Circle
            size="30px"
            color="white"
            bg="green.500"
            _hover={{ bg: "green.600" }}
          >
            <a href="#">
              <FaTwitter />
            </a>
          </Circle>
        </HStack>
        <Text
          display={{ sm: "none", md: "inherit" }}
          pl="1rem"
          fontWeight="bolder"
        >
          Search
        </Text>
        <FaSearch color="gray.300" size="30px" />
      </HStack>
    </Flex>
  );
}
