import { Box, Text, Flex } from "@chakra-ui/react";
import GradientLayout from "../components/GradientLayout";
import { useMe } from "../lib/hooks";

const artists = [{ name: "Bill" }, { name: "John" }, { name: "Regina" }];

export default function Home() {
  const { user } = useMe();

  console.log("user", user);

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
      </Box>
    </GradientLayout>
  );
}
