import React from "react"
import "./menu.css"
import Link from "../link"
import { Flex, Box } from "theme-ui"

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <Flex
          sx={{
            flexDirection: "column",
            fontSize: "3rem",
            fontWeight: "800",
            letterSpacing: "0.4rem",
            color: "inherit",
            "&.active": {
              color: "tomato",
            },
            "&.hover": {
              color: "secondary",
            },
          }}
        >
          <Link
            to="/ui-design"
            sx={{
              color: "inherit",
              "&.active": {
                color: "primary",
              },
            }}
          >
            ui design
          </Link>
          <Link
            to="/ux-design"
            sx={{
              color: "inherit",
              "&.active": {
                color: "primary",
              },
            }}
          >
            ux design
          </Link>
          <Link to="/web-dev">web development</Link>
          <Link to="/illustration">illustration</Link>
          <Link to="/plane">a plane</Link>
        </Flex>
      </nav>
    )
  }

// const Menu = () => {
//   return (
//     <nav>
//       <Flex
//         className="menutype"
//         sx={{
//           flexDirection: "column",
//         }}
//       >
//         <Link to="/ui-design">ui design</Link>
//         <Link to="/ux-design">ux design</Link>
//         <Link to="/web-dev">web development</Link>
//         <Link to="/illustration">illustration</Link>
//         <Link to="/plane">a plane</Link>
//       </Flex>
//     </nav>
//   )

export default Menu

// <Layout>
// <Flex flexDirection="columns"></Flex>
// <Menu></Menu>
// <Box> This is about UI design</Box>
// </Layout>
