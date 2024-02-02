import React from "react"
import { createRoot } from "react-dom/client"
import Tabs from "./tabs"

function init() {
  const appContainer = document.createElement("div")
  if (!appContainer) {
    throw new Error("Can not find AppContainer")
  }
  document.body.appendChild(appContainer)
  const root = createRoot(appContainer)
  root.render(<Tabs />)
}

init()
