import { Box, Flex } from "@chakra-ui/react"
import PlayerBar from "./PlayerBar"
import Sidebar from "./Sidebar"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const PlayerLayout = ({ children }: Props) => {
  return (
    <div className="bg-kombu flex flex-col h-screen">
      <div className="flex flex-row">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="">{children}</div>
      </div>
      <PlayerBar />
    </div>
  )
}

export default PlayerLayout
