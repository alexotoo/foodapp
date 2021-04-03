import "../styles/home.scss";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
