import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Center,
  Link,
  Text,
} from "@chakra-ui/react";
import { Flex, Circle, HStack, Spacer } from "@chakra-ui/layout";
import {
  FaSearch,
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg="transparent"
        p="0"
        _hover={{ bg: "transparent", color: "gray.500" }}
        color="gray.400"
      >
        <GiHamburgerMenu size="40px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <Center>
                <Text className="logo" textDecoration="none" color="green.500">
                  Eatify
                </Text>
              </Center>
            </DrawerBody>
            <DrawerFooter>
              <HStack
                display={{ sm: "none", md: "inherit" }}
                paddingRight="4rem"
              >
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
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
