import React from "react"
import "./layout.css"
import "typeface-muli"
import { Grid, Flex, Box } from "theme-ui"
import Logo from "./logo"
import Menu from "./menu/menu"

export default ({ children }) => (
  <Grid columns="2">
    <Box>
      <Logo></Logo>
      <Menu></Menu>
    </Box>
    <Box>{children}</Box>
  </Grid>
)
