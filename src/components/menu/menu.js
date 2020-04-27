import React from "react"
import "./menu.css"
import Link from "../link"
import { Flex, Box } from "theme-ui"

const Menu = () => {
  return (
    <nav>
      <Flex
        className="menutype"
        sx={{
          flexDirection: "column",
        }}
      >
        <Link to="/ui-design">ui design</Link>
        <Link to="/ux-design">ux design</Link>
        <Link to="/web-dev">web development</Link>
        <Link to="/illustration">illustration</Link>
        <Link to="/plane">a plane</Link>
      </Flex>
    </nav>
  )
}

export default Menu

// <Layout>
// <Flex flexDirection="columns"></Flex>
// <Menu></Menu>
// <Box> This is about UI design</Box>
// </Layout>
