import React from "react"
import "./layout.css"
import "typeface-muli"
import { Flex, Box } from "theme-ui"

export default ({ children }) => (
  <Flex>
    <Box>This is in the box</Box>
    <Box>{children}</Box>
  </Flex>
)
