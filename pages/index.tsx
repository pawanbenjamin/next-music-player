import { Box, Text, Flex } from "@chakra-ui/react";
import GradientLayout from "../components/GradientLayout";

const artists = [{ name: "Bill" }, { name: "John" }, { name: "Regina" }];

export default function Home() {
  return (
    <GradientLayout>
      <Box>
        <Box>
          <Text>PB Records</Text>
        </Box>
        <Flex>
          {artists.map((artist) => {
            return (
              <Box>
                <Text>{artist.name}</Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </GradientLayout>
  );
}
