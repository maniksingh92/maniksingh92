import React from "react"

import Layout from "../components/Layout"

export default () => (
  <Layout>
    <section
      id="section-hero"
      className="pt-48 pb-16 mb-32 text-center bg-pattern bg-slope-bottom"
    >
      <div className="container">
        <div className="mb-16 text-xl italic">
          A great software is a product of profound understanding and a simple
          design.
        </div>
        <h1 className="flex flex-col text-6xl">
          <span className="font-bold text-brand">Hello.</span>
          <span>I'm Manik Singh.</span>
        </h1>
        <div className="flex items-center justify-center">
          <hr className="w-8" />
          <span className="mx-4">Programmer</span>
          <hr className="w-8" />
        </div>
      </div>
    </section>

    <section id="section-overview" className="container py-16">
      <div className="flex justify-center">
        <h2 className="text-3xl text-center border-t-4 border-b-4 mb-8">
          Overview
        </h2>
      </div>
    </section>
  </Layout>
)
