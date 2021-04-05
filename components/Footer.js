import { Center } from "@chakra-ui/layout";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
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
        <p>Developed by AlexooO</p>
        <a href="https://alexooodev.netlify.app/">
          visit: alexooodev.netlify.app
        </a>
        <h5>&#169; {year}</h5>
      </div>
    </Center>
  );
}
