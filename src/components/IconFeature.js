import React from "react"

export default function IconFeature({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center m-8 max-w-xs text-center">
      <div className="flex items-center justify-center bg-brand p-6 rounded-md text-light text-5xl mb-4">
        <Icon />
      </div>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  )
}
