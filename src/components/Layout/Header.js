import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 font-type-header bg-dark text-light opacity-95">
      <nav className="container flex">
        <Link to="/" className="mr-auto">
          Manik Codes
        </Link>
        <ul className="flex">
          <li className="hidden sm:inline-block">
            <Link to="/blog/" className="mx-4">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/resume/" className="mx-4">
              Résumé
            </Link>
          </li>
          <li className="hidden sm:inline-block">
            <Link to="/contact/" className="mx-4">
              Get In Touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
