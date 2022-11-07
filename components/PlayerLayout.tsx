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
      <Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default PlayerLayout;
