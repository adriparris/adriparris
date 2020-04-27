import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu/menu"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

const pageTheme = {
  ...theme,
  colors: { ...theme.colors, background: "#FF96BC", text: "white" },
}

export default () => (
  <ThemeProvider theme={pageTheme}>
    <Layout>
      <Menu></Menu>
    </Layout>
  </ThemeProvider>
)
