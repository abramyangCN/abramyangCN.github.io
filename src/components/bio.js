/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    width: theme.spacing(80),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
}))

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Grid container wrap="nowrap" spacing={2} justify="center" alignItems="center">
            <Grid item>
              <Avatar>
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author.name}
                />
              </Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography variant="h5" component="h2">
                {author.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Typography variant="body2" component="p">
                Written by <strong>{author.name}</strong> {author.summary}
                <br />
                <a href={`https://twitter.com/${social.twitter}`}>
                  You should follow him on Twitter
                </a>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" href={`https://twitter.com/${social.twitter}`}>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Bio
