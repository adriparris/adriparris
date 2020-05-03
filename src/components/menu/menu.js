import React from "react"
import Link from "../link"
import { Flex } from "theme-ui"

const Menu = () => {
  return (
    <nav>
      <Flex
        sx={{
          flexDirection: "column",
          fontSize: "3rem",
          fontWeight: "800",
          letterSpacing: "0.4rem",
        }}
      >
        <Link to="/ui-design" className="shiftright">
          ui design
        </Link>
        <Link to="/ux-design" className="shiftright">
          ux design
        </Link>
        <Link to="/web-dev" className="shiftright">
          web dev
        </Link>
        <Link to="/illustration" className="shiftright">
          illustration
        </Link>
        <Link to="/plane" className="shiftright">
          a plane
        </Link>
      </Flex>
    </nav>
  )
}

export default Menu
