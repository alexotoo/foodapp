import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";

export default function LoginLogoutLinks() {
  return (
    <Breadcrumb
      fontWeight="medium"
      fontSize="sm"
      color="gray.400"
      fontWeight="bolder"
      display={{ base: "none", md: "inherit" }}
    >
      <BreadcrumbItem _hover={{ textDecoration: "none", color: "gray.500" }}>
        <BreadcrumbLink as={Link} href="#">
          Log-in
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem _hover={{ textDecoration: "none", color: "gray.500" }}>
        <BreadcrumbLink as={Link} href="#">
          Sign-up
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
