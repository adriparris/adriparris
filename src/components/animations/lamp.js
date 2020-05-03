import React from "react"
import { Box, Link } from "theme-ui"
import { Lamp } from "../../assets/index"
import "./animations.css"
import { useColorMode } from "theme-ui"

const LampButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Box>
      <Link
        className="lamp-ani"
        backgroundColor="none"
        css={{ zIndex: "8" }}
        onClick={e => {
          setColorMode(colorMode === "rooibos" ? "night" : "rooibos")
        }}
      >
        <Lamp height="200px" />
      </Link>
    </Box>
  )
}

export default LampButton
