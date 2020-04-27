import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu/menu"
import { ThemeProvider, Box } from "theme-ui"
import { useColorMode } from "theme-ui"
import { Link } from "gatsby"

const pageTheme = {
  colors: { text: "red", background: "black" },
}

export default () => {
  const [colorMode, setColorMode] = useColorMode()

  React.useEffect(() => {
    setColorMode("mypage")
    return () => setColorMode(undefined)
  }, [])

  return (
    <Layout>
      <Menu></Menu>
      <Link to="/another-page">Another page</Link>

      <ThemeProvider theme={pageTheme}>
        <Box>
          <Box bg="background" color="text">
            Red text on black background because of theme
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  )
}
