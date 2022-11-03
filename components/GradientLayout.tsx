import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function GradientLayout({ children }: Props) {
  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex>{children}</Flex>
    </Box>
  );
}
