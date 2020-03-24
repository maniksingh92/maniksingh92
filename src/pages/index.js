import React from "react"

import Layout from "../components/Layout"

export default () => (
  <Layout>
    <section className="flex container flex-col py-32 justify-center items-center text-center">
      <div className="mb-16 text-xl italic">
        A great software is a product of profound understanding and a simple
        design.
      </div>
      <h1 className="flex flex-col text-6xl">
        <span className="font-bold">Hello.</span>
        <span>I'm Manik Singh.</span>
      </h1>
      <div className="flex items-center">
        <hr className="w-8" />
        <span className="mx-4">Programmer</span>
        <hr className="w-8" />
      </div>
    </section>
  </Layout>
)
