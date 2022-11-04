import { Box, Text, Flex, Button } from "@chakra-ui/react";
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
    <GradientLayout>
      <Box>
        <Box>
          <Text>PB Records</Text>
        </Box>
        <Flex>
          {artists.map((artist) => {
            return (
              <Box key={Math.floor(Math.random() * 20)}>
                <Text>{artist.name}</Text>
              </Box>
            );
          })}
        </Flex>
        <Text>{JSON.stringify(user)}</Text>
        <Button type="submit" bg="green.500" onClick={logout}>
          Logout
        </Button>
      </Box>
    </GradientLayout>
  );
}
