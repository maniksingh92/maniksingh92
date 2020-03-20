import React from "react"

import Layout from "../components/Layout"

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="container py-32">
        <h1 className="text-2xl text-center mb-8">
          The content you were looking for was not found..
        </h1>
      </section>
    </Layout>
  )
}
