// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/reset.scss"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Home = ({ data, location }: PageProps<Data>) => {
  const { title: siteTitle } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
