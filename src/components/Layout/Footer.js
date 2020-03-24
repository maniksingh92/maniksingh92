import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import gatsbyLogo from "../../assets/images/external/gatsby.svg"
import reactLogo from "../../assets/images/external/react.svg"
import tailwindcssLogo from "../../assets/images/external/tailwindcss.svg"

export default function Footer() {
  const travisCILogo = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "images/external/TravisCI-Full-Color.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer className="container text-center">
      <hr />
      <div className="mt-4">Built with:</div>
      <div className="flex justify-center items-center">
        <a
          className="m-4"
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-32" src={gatsbyLogo} alt="GatsbyJS" />
        </a>

        <a
          className="m-4"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-20" src={reactLogo} alt="ReactJS" />
        </a>

        <a
          className="m-4"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-40" src={tailwindcssLogo} alt="Tailwind CSS" />
        </a>

        <a
          className="m-4"
          href="https://travis-ci.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            className="w-32"
            fluid={travisCILogo.file.childImageSharp.fluid}
            alt="Travis CI"
          />
        </a>
      </div>
      <div className="mb-4">&copy; 2020</div>
    </footer>
  )
}
