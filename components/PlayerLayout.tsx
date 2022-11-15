import { Box, Flex } from "@chakra-ui/react"
import PlayerBar from "./PlayerBar"
import Sidebar from "./Sidebar"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const PlayerLayout = ({ children }: Props) => {
  return (
    <div className="bg-kombu flex flex-col ">
      <div className="flex flex-row content-container">
        <div className="w-44">
          <Sidebar />
        </div>
        <div>
          <div className="content-container ">{children}</div>
        </div>
      </div>
      <div>
        <PlayerBar />
      </div>
    </div>
  )
}

export default PlayerLayout
