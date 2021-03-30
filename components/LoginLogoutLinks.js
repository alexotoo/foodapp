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
      display={{ sm: "none", md: "inherit" }}
    >
      <BreadcrumbItem _active={{ outlineWidth: "0" }}>
        <BreadcrumbLink
          as={Link}
          href="#"
          _hover={{ textDecoration: "none", color: "gray.500" }}
        >
          Log-in
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          href="#"
          _hover={{ textDecoration: "none", color: "gray.500" }}
          _active={{ outline: "none" }}
        >
          Sign-up
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
