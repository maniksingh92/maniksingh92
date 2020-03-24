import React from "react"
import { FaBolt } from "react-icons/fa"
import { FaProjectDiagram } from "react-icons/fa"
import { MdDevices } from "react-icons/md"
import { FaLightbulb } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { TiArrowLoop } from "react-icons/ti"
import { FaBrain } from "react-icons/fa"
import { FiTarget } from "react-icons/fi"

import IconFeature from "../components/IconFeature"
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
          <hr className="w-8 border-dark" />
          <span className="mx-4">Programmer</span>
          <hr className="w-8 border-dark" />
        </div>
      </div>
    </section>

    <section id="section-overview" className="container py-16">
      <div className="flex justify-center">
        <h2 className="text-3xl text-center border-t-4 border-b-4 mb-16">
          Overview
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <IconFeature
          Icon={FaBolt}
          title="Fast"
          description="Delivers results in a fast-paced environment"
        />
        <IconFeature
          Icon={FaProjectDiagram}
          title="Scalable"
          description="Builds code patterns that are maintainable and scalable"
        />
        <IconFeature
          Icon={MdDevices}
          title="Responsive"
          description="Designs apps compatible across devices"
        />
        <IconFeature
          Icon={FaLightbulb}
          title="Decisive"
          description="Actively contributes to ideas that advance the app"
        />
        <IconFeature
          Icon={IoIosPeople}
          title="Team Player"
          description="Enjoys learning from and helping his teammates"
        />
        <IconFeature
          Icon={TiArrowLoop}
          title="Reactive"
          description="Accepts feedback seriously and constructively"
        />
        <IconFeature
          Icon={FaBrain}
          title="Quick Learner"
          description="Learns new skills and practices swiftly"
        />
        <IconFeature
          Icon={FiTarget}
          title="Focussed"
          description="Aims to stay on track and within target goals"
        />
      </div>
    </section>
  </Layout>
)
