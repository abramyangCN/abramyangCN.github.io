import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PrimarySearchAppBar from "./PrimarySearchAppBar"
import Container from "@material-ui/core/Container"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  // let header

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
          siteSetupTime
          git {
            username
            repo
          }
        }
      }
    }
  `)

  const pages = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
  ]

  const { author, siteSetupTime, git } = data.site.siteMetadata

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }

  return (
    <React.Fragment>
      <PrimarySearchAppBar
        pages={pages}
        logo={data.logo.childImageSharp.fixed}
        siteName={title}
      />
      <Container maxWidth="sm">
        <main>{children}</main>
      </Container>

      <footer
        style={{
          textAlign: `center`,
        }}
      >
        Copyright © {siteSetupTime} {author.name} {` `}
        <iframe
          style={{
            display: `inline-block`,
            marginBottom: `-0.375em`,
          }}
          title={`github star`}
          frameBorder={0}
          scrolling="0"
          width="100px"
          height="20px"
          src={`https://ghbtns.com/github-btn.html?user=${git.username}&repo=${git.username}.github.io&type=star&count=true`}
        ></iframe>
      </footer>
    </React.Fragment>
  )
}

export default Layout
