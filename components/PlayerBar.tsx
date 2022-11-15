import Player from "./Player";

type song = {
  name: string;
  artist: {
    name: string;
  };
};

const activeSong: song | null = {
  name: "A Night with Bill",
  artist: { name: "Bill" },
};

export default function PlayerBar() {
  return (
    <div>
      <div>
        {activeSong ? (
          <div>
            <h3>{activeSong.name}</h3>
            <h3>{activeSong.artist.name}</h3>
          </div>
        ) : null}
        <div>{activeSong ? <Player /> : null}</div>
      </div>
    </div>
  );
}
