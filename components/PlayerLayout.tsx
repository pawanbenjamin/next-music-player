import { Box, Flex } from "@chakra-ui/react";
import PlayerBar from "./PlayerBar";
import Sidebar from "./Sidebar";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const PlayerLayout = ({ children }: Props) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>{children}</div>
      </div>
      <div>
        <PlayerBar />
      </div>
    </div>
  );
};

export default PlayerLayout;
