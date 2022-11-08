// import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  Flex,
  List,
  ListIcon,
  Divider,
  ListItem,
  Center,
  LinkBox,
  Link,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
  MdEventBusy,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Add",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => {
  return { name: `Playlist ${i + 1}`, id: i + 1 };
});

export default function Sidebar() {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          {/* <NextImage src="/logo.svg" height={60} width={120} /> */}
          <Text>NMP</Text>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menuItem, i) => (
              <ListItem paddingX="20px" fontSize="16px" key={i}>
                <LinkBox>
                  <NextLink href={menuItem.route} legacyBehavior passHref>
                    <Link>
                      <ListIcon
                        as={menuItem.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menuItem.name}
                    </Link>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route} legacyBehavior passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
          <Divider bg="green.800" marginY="10px" />
        </Box>

        <Box
          sx={{
            "&::-webkit-scrollbar": {
              width: "16px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
          height="66%"
          paddingLeft="20px"
          overflowY="auto"
        >
          <List marginBottom="3rem" spacing={2}>
            {playlists.map((list) => (
              <ListItem key={list.id}>
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: "/playlist/[id]",
                      query: { id: list.id },
                    }}
                    legacyBehavior
                    passHref
                  >
                    <LinkOverlay>{list.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
