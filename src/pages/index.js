import React from "react"
import Layout from "../components/layout"
import { Box } from "theme-ui"
import { useColorMode } from "theme-ui"
import { Link } from "gatsby"
import LampButton from "../components/animations/lamp"
// import TypingAnimation from "../components/animations/TypingAnimation"
import HomeAnimation from "../components/animations/homepage-comp"

export default props => {
  const [colorMode, setColorMode] = useColorMode()

  React.useEffect(() => {
    setColorMode("rooibos")
    return () => setColorMode(undefined)
  }, [])

  return (
    <Layout>
      <LampButton />
      <Box>
        <HomeAnimation />
      </Box>
    </Layout>
  )
}

// export default () => {
//   const [colorMode, setColorMode] = useColorMode()

//   React.useEffect(() => {
//     setColorMode("rooibos")
//     return () => setColorMode(undefined)
//   }, [])

//   return (
//     <Layout>
//       <Box>
//         <HomeAnimation />
//       </Box>
//     </Layout>
//   )
// }
