import React from "react"
import Layout from "../components/layout"
import { useColorMode } from "theme-ui"

export default () => {
  const [colorMode, setColorMode] = useColorMode()

  React.useEffect(() => {
    setColorMode("latte")
    return () => setColorMode(undefined)
  }, [])

  return <Layout>hello here is info about ui</Layout>
}
