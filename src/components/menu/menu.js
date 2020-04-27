import React, { Component } from "react"
import "./menu.css"
import { Link } from "gatsby"
import { Flex, Box } from "theme-ui"

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <Flex
          className="menutype"
          sx={{
            flexDirection: "column",
          }}
        >
          <Link to="/ui-design" activeStyle={{ color: "colors.primary" }}>
            ui design
          </Link>
          <Link to="/ux-design" activeStyle={{ color: "tomato" }}>
            ux design
          </Link>
          <Link to="/web-dev" activeStyle={{ color: "tomato" }}>
            web development
          </Link>
          <Link to="/illustration" activeStyle={{ color: "tomato" }}>
            illustration
          </Link>
          <Link to="/plane" activeStyle={{ color: "tomato" }}>
            a plane
          </Link>
        </Flex>
      </nav>
    )
  }
}

export default Menu

// <Layout>
// <Flex flexDirection="columns"></Flex>
// <Menu></Menu>
// <Box> This is about UI design</Box>
// </Layout>
