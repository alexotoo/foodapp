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
        <img className="logo" src="alexooodevlogo.png" alt="logo" />
        <p>Developed by Alex Otoo</p>
        visit:<a href="https://alexooodev.vercel.app/"> my website</a>
        <h5>&#169; {year}</h5>
      </div>
    </Center>
  );
}
