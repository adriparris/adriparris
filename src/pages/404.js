import React from "react"
import Layout from "../components/layout"
import { ThemeProvider, Box } from "theme-ui"
import { useColorMode } from "theme-ui"
import { Link } from "gatsby"

const pageTheme = {
  colors: { text: "red", background: "black" },
}

export default () => {
  const [colorMode, setColorMode] = useColorMode()

  React.useEffect(() => {
    setColorMode("coconut")
    return () => setColorMode(undefined)
  }, [])

  return (
    <ThemeProvider theme={pageTheme}>
      <Box>404</Box>
    </ThemeProvider>
  )
}
