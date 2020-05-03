import React from "react"
import { Box, Flex } from "theme-ui"
import TypingAnimation from "../animations/TypingAnimation"
import { Lamp, Plant1, Plant2, Window } from "../../assets/index"
import "./animations.css"

const HomeAnimation = () => {
  return (
    <Flex>
      <Box alignItems="flex-start">
        <Box className="window-ani" css={{ zIndex: "9" }}>
          <Window height="350px" />
        </Box>
      </Box>
      <Flex
        css={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
        }}
      >
        <Box className="plant-1">
          <Plant1 height="350px" />
        </Box>
        <Box className="plant-2">
          <Plant2 height="100px" />
        </Box>
      </Flex>

      <Box
        className="typing-ani"
        css={{
          maxWidth: "47%",
        }}
      >
        <TypingAnimation />
      </Box>
    </Flex>
  )
}

export default HomeAnimation
