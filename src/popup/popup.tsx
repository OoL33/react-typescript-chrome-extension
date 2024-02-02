import React from "react"
import { createRoot } from "react-dom/client"
import "../assets/tailwind.css"
import bobaCat from "../static/bobacat.jpg"

function Popup() {
  return (
    <div>
      <h1>Hello World</h1>
      <img
        src={bobaCat}
        alt="Image of gray carton cat drinking a boba milk tea."
      />
    </div>
  )
}

export default Popup
