import { Box, Flex } from "@chakra-ui/react";
import PlayerBar from "./PlayerBar";
import Sidebar from "./Sidebar";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const PlayerLayout = ({ children }: Props) => {
  return (
    <Flex maxW="100vw" height="100vh">
      <Box width="20rem">
        <Sidebar />
      </Box>
      <Box marginBottom="100px">
        <Box height="calc(100vh - 100px)" maxW="100%">
          {children}
        </Box>
      </Box>
      <Box position="absolute" left="0" bottom="0" zIndex="1">
        <PlayerBar />
      </Box>
    </Flex>
  );
};

export default PlayerLayout;
