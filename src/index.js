import "./index.css"
import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"

// reference the content element for DOM manipulation
const content = document.getElementById("content")

// grab navbar element
const nav = document.querySelector("#nav")

// add event listener through delegation
nav.addEventListener("click", (event) => {
  const target = event.target

  switch(target.id){
    case "home":
      content.innerHTML = ""
      home(content)
      console.log("home")
      break

    case "menu":
      content.innerHTML = ""
      menu(content)
      break

    case "about":
      content.innerHTML = ""
      about(content)
      break

    default:
      home(content)
  }
})

home(content)
