import React from "react"
import { Link, withPrefix } from "gatsby"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 font-type-header bg-dark text-light opacity-95 z-10">
      <nav className="container flex">
        <Link to="/" className="mr-auto">
          Manik Codes
        </Link>
        <ul className="flex">
          <li className="hidden sm:inline-block mx-4">
            <Link to="/blog/">Blog</Link>
          </li>
          <li className="mx-4">
            <a
              rel="noopener noreferrer"
              href={withPrefix("/docs/manik-singh-resume.pdf")}
              target="_blank"
            >
              Résumé
            </a>
          </li>
          <li className="hidden sm:inline-block mx-4">
            <Link to="/contact/">Get In Touch</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
