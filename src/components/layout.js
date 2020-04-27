import React from "react"
import "./layout.css"
import "typeface-muli"
import { Flex, Box } from "theme-ui"
import Logo from "./logo"
import Menu from "./menu/menu"

export default ({ children }) => (
  <div>
    <Box sx={{ paddingBottom: ["20px", "40px"] }}>
      <Logo></Logo>
    </Box>

    <Flex
      sx={{
        flexDirection: ["column", "row"],
      }}
    >
      <Box sx={{ paddingRight: ["100px", "0px"] }}>
        <Menu></Menu>
      </Box>
      <Box>{children}</Box>
    </Flex>
  </div>
)
