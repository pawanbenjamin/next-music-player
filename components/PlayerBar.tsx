import Player from "./Player"

type song = {
  name: string
  artist: {
    name: string
  }
}

const activeSong: song | null = {
  name: "A Night with Bill",
  artist: { name: "Bill" }
}

export default function PlayerBar() {
  return (
    <div>
      {activeSong ? (
        <div>
          <h3>{activeSong.name}</h3>
          <h3>{activeSong.artist.name}</h3>
        </div>
      ) : null}
      {activeSong ? <Player /> : null}
    </div>
  )
}
