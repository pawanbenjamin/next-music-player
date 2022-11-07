import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const PlayerLayout = ({ children }: Props) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="180px" marginBottom="100px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
    </Box>
  );
};

export default PlayerLayout;
