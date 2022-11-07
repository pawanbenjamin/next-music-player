import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import GradientLayout from "../components/GradientLayout";
import { useRouter } from "next/router";
import { useMe } from "../lib/hooks";

const artists = [{ name: "Bill" }, { name: "John" }, { name: "Regina" }];

export default function Home() {
  const router = useRouter();
  const { user } = useMe();

  async function logout() {
    await fetch("/api/logout");
    router.push("/signin");
  }

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
          {/* <Button type="submit" bg="green.500" onClick={logout}>
            Logout
          </Button> */}
        </Box>
        <Flex>
          {artists.map((artist) => (
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
