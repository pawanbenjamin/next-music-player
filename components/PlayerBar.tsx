import Player from "./Player"
import { useStoreState } from "easy-peasy"

type song = {
  name: string
  artist: {
    name: string
  }
}

export default function PlayerBar() {
  const songs = useStoreState((state: any) => state.activeSongs)
  const activeSong = useStoreState((state: any) => state.activeSong)

  return (
    <div className="absolute bottom-0 left-0 h-fit">
      {activeSong ? (
        <div>
          <h3>{activeSong.name}</h3>
          <h3>{activeSong.artist.name}</h3>
        </div>
      ) : null}
      {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
    </div>
  )
}
