import { Container } from "@chakra-ui/layout";
import { useRouter } from "next/router";

export default function details() {
  const router = useRouter();
  console.log(router);

  return (
    <Container width="100%" minHeight="90vh" bg="blue" pt="4rem">
      <h1>hello</h1>
    </Container>
  );
}
