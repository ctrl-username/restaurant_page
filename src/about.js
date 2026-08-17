// create about elements
import "./about.css"

const about = (container) => {

  // create about elements
  const aboutWrapper = document.createElement("div")
  const aboutHeader = document.createElement("div")
  const aboutHeaderH1 = document.createElement("h1")
  const aboutContents = document.createElement("div")

  const leftAboutImage = document.createElement("img")
  const rightContentDiv = document.createElement("div")

  const firstContent = document.createElement("p")
  const secondContent = document.createElement("p")


  // give elements classes
  aboutWrapper.classList = "about-wrapper"
  aboutHeader.classList = "about-header"
  aboutContents.classList = "about-contents"
  leftAboutImage.classList = "about-image"
  rightContentDiv.classList = "about-text-div"


  // add contents to elements
  aboutHeaderH1.textContent = "Our Story & Craft"

  leftAboutImage.src = "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  leftAboutImage.alt = "Artisan pasta maker"

  firstContent.textContent = "Spagyo was born from a passion to preserve authentic Italian pasta-making traditions while bringing modern culinary refinement to every dish."

  secondContent.textContent = "Every morning, our chefs extrude fresh pasta using imported Italian bronze dies, giving the noodles a rich, porous texture that catches sauce perfectly."


  // append elements
  aboutHeader.appendChild(aboutHeaderH1)

  rightContentDiv.append(firstContent, secondContent)

  aboutContents.append(leftAboutImage, rightContentDiv)

  aboutWrapper.append(aboutHeader, aboutContents)

  container.append(aboutWrapper)

}

export {about}
