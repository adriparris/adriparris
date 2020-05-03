import React from "react"
import Link from "../link"
import { Flex } from "theme-ui"

const Logo = () => {
  return (
    <Flex
      sx={{
        fontSize: "1.2rem",
        fontWeight: "700",
        color: "text",
      }}
    >
      <Link to="/">adri parris</Link>
    </Flex>
  )
}

export default Logo
