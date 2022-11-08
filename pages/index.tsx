import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import { json } from "stream/consumers";
import GradientLayout from "../components/GradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

// const artists = [{ name: "Bill" }, { name: "John" }, { name: "Regina" }];

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany();
  console.log(artists);
  const allArtists = JSON.parse(JSON.stringify(artists));

  return { props: { artists: allArtists } };
};

export default function Home({ artists }: any) {
  const { user } = useMe();
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistCount} public playlists`}
      image="https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists this month:
          </Text>
          <Text fontSize="medium">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist: any) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
}
