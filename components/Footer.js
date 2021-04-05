import { Center } from "@chakra-ui/layout";

export default function Footer() {
  return (
    <Center
      bg="black"
      marginTop="2rem"
      color="gray.400"
      padding="2rem"
      fontWeight="bolder"
      textAlign="center"
    >
      <div>
        <h1 className="logo">Eatify</h1>
        <a href="https://alexooodev.netlify.app/">Developed by AlexooO</a>
      </div>
    </Center>
  );
}
