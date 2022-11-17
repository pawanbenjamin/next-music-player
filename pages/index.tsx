import GradientLayout from "../components/GradientLayout"
import { useMe } from "../lib/hooks"
import prisma from "../lib/prisma"

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany()
  console.log(artists)
  const allArtists = JSON.parse(JSON.stringify(artists))

  return { props: { artists: allArtists } }
}

export default function Home({ artists }: any) {
  const { user } = useMe()
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistCount} public playlists`}
      image="https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg"
    >
      <div className="w-screen">
        <div>
          <h4>Top artists this month:</h4>
          <h4>Only visible to you</h4>
        </div>
        <div>
          {artists.map((artist: any) => (
            <div>
              <div>
                <img
                  width="100px"
                  height="100px"
                  alt="image"
                  src="https://placekitten.com/300/300"
                />
                <div>
                  <h2>{artist.name}</h2>
                  <h2>Artist</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientLayout>
  )
}
