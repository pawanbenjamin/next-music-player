import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const color = "green";

export default function GradientLayout({ children }: Props) {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex>{children}</Flex>
    </Box>
  );
}
