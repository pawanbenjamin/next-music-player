// import NextImage from "next/image";
import NextLink from "next/link"
// import {
//   Box,
//   Flex,
//   List,
//   ListIcon,
//   Divider,
//   ListItem,
//   Center,
//   LinkBox,
//   Link,
//   LinkOverlay,
//   Text
// } from "@chakra-ui/react"

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
  MdEventBusy
} from "react-icons/md"
import { usePlaylist } from "../lib/hooks"

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/"
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search"
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library"
  }
]

const musicMenu = [
  {
    name: "Add",
    icon: MdPlaylistAdd,
    route: "/"
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites"
  }
]

// const playlists = new Array(30).fill(1).map((_, i) => {
//   return { name: `Playlist ${i + 1}`, id: i + 1 }
// })

export default function Sidebar() {
  const { playlists } = usePlaylist()
  console.log({ playlists })
  return (
    <div>
      <div className="content-container">
        <div className="text-silk font-bold">
          {/* <NextImage src="/logo.svg" height={60} width={120} /> */}
          <h3>NMP</h3>
        </div>
        <div>
          <ul>
            {navMenu.map((menuItem, i) => (
              <li className="text-silk font-bold" key={i}>
                <NextLink href={menuItem.route} legacyBehavior passHref>
                  {menuItem.name}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="text-silk font-bold">
            {musicMenu.map((item) => (
              <li key={item.name}>
                <NextLink href={item.route}>{item.name}</NextLink>
              </li>
            ))}
          </ul>
          <hr />
        </div>

        <div className="overflow-y-auto">
          <ul className="text-silk font-bold">
            {playlists.map((list: any) => (
              <li key={list.id}>
                <NextLink
                  href={{
                    pathname: "/playlist/[id]",
                    query: { id: list.id }
                  }}
                >
                  {list.name}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
