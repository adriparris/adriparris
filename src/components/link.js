/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
// import { AniLink } from "gatsby"

export default props => (
  <Link
    {...props}
    activeClassName="active"
    fontFamily="body"
    sx={{
      color: "primary",
      "&.active": {
        color: "highlight",
      },
      "&:hover": {
        color: "secondary",
      },
      textDecoration: "none",
    }}
  />
)
