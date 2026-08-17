// create home elements
import "./home.css"

import heroImageFile from "./hero-image.png"


const home = (container) => {

  // create DOM elements
  const homeWrapper = document.createElement("div")
  const heroTextElements = document.createElement("div")
  const boldHeaderDiv = document.createElement("div")
  const boldHeaderDivText = document.createElement("h1")
  const subTitle = document.createElement("p")
  const ctaButtonsContainer = document.createElement("div")
  const ctaButton1 = document.createElement("button")
  const ctaButton2 = document.createElement("button")
  const heroImage = document.createElement("img")


  // give elements classes
  homeWrapper.classList = "home-wrapper"
  heroTextElements.classList = "hero-text-elements"
  boldHeaderDiv.classList = "hero-header-div"
  boldHeaderDivText.classList = "hero-header-text"
  subTitle.classList = "hero-subtitle"
  ctaButtonsContainer.classList = "cta-buttons-container"
  ctaButton1.classList = "cta-button-1 accent-button"
  ctaButton2.classList = "cta-button-2 accent-button"
  heroImage.classList = "hero-image"


  // add contents to elements
  boldHeaderDivText.textContent = "Experience Authentic Italian Pasta."
  subTitle.textContent = "Hand-made pasta, fresh local ingredients, and recipes straight from Italy's core."
  ctaButton1.textContent = "Order Online"
  ctaButton2.textContent = "Reserve Table"
  heroImage.src = heroImageFile
  heroImage.alt = "Fresh Italian Tagliatelle Pasta"


  // append elements
  ctaButtonsContainer.append(ctaButton1, ctaButton2)

  boldHeaderDiv.appendChild(boldHeaderDivText)

  heroTextElements.append(
    boldHeaderDiv,
    subTitle,
    ctaButtonsContainer
  )

  homeWrapper.append(heroTextElements, heroImage)

  container.append(homeWrapper)

}

export {home}
