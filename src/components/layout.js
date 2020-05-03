import React from "react"
import { Flex, Box } from "theme-ui"
import Logo from "./logo"
import Menu from "./menu/menu"
import "typeface-muli"
import "../components/animations/animations.css"

export default ({ children }) => (
  <Box margin="50px" sx={{ fontFamily: "Muli, sans-serif" }}>
    <Box sx={{ paddingBottom: ["20px", "40px"] }}>
      <Logo></Logo>
    </Box>
    <Flex
      sx={{
        flexDirection: ["column", "row"],
      }}
    >
      <Box
        sx={{
          paddingRight: ["0px", "100px"],
          paddingBottom: ["20px", "0px"],
        }}
      >
        <Menu></Menu>
      </Box>
      <Box>{children}</Box>
    </Flex>
  </Box>
)
