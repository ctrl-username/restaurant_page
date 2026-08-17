// create menu elements
import "./menu.css"

const menu = (container) => {

  // create elements
  const menuWrapper = document.createElement("div")
  const menuHeaderDiv = document.createElement("div")
  const menuHeaderDivH1 = document.createElement("h1")
  const menuHeaderSub = document.createElement("p")
  const recipeGrid = document.createElement("div")

  // recipe cards
  const recipeCard1 = document.createElement("div")
  const recipeCard1Header = document.createElement("div")
  const recipeCard1Title = document.createElement("h3")
  const recipeCard1Price = document.createElement("span")
  const recipeCard1Desc = document.createElement("p")

  const recipeCard2 = document.createElement("div")
  const recipeCard2Header = document.createElement("div")
  const recipeCard2Title = document.createElement("h3")
  const recipeCard2Price = document.createElement("span")
  const recipeCard2Desc = document.createElement("p")

  const recipeCard3 = document.createElement("div")
  const recipeCard3Header = document.createElement("div")
  const recipeCard3Title = document.createElement("h3")
  const recipeCard3Price = document.createElement("span")
  const recipeCard3Desc = document.createElement("p")

  const recipeCard4 = document.createElement("div")
  const recipeCard4Header = document.createElement("div")
  const recipeCard4Title = document.createElement("h3")
  const recipeCard4Price = document.createElement("span")
  const recipeCard4Desc = document.createElement("p")


  // give elements classes
  menuWrapper.classList = "menu-wrapper"
  menuHeaderDiv.classList = "menu-header-div"
  menuHeaderSub.classList = "menu-header-sub"
  recipeGrid.classList = "recipe-grid"

  recipeCard1.classList = "recipe-card"
  recipeCard1Header.classList = "recipe-card-header"
  recipeCard1Price.classList = "price-tag"
  recipeCard1Desc.classList = "recipe-desc"

  recipeCard2.classList = "recipe-card"
  recipeCard2Header.classList = "recipe-card-header"
  recipeCard2Price.classList = "price-tag"
  recipeCard2Desc.classList = "recipe-desc"

  recipeCard3.classList = "recipe-card"
  recipeCard3Header.classList = "recipe-card-header"
  recipeCard3Price.classList = "price-tag"
  recipeCard3Desc.classList = "recipe-desc"

  recipeCard4.classList = "recipe-card"
  recipeCard4Header.classList = "recipe-card-header"
  recipeCard4Price.classList = "price-tag"
  recipeCard4Desc.classList = "recipe-desc"


  // add contents to elements
  menuHeaderDivH1.textContent = "Our Handcrafted Menu"
  menuHeaderSub.textContent = "Extruded fresh daily using 100% organic durum wheat semolina."

  recipeCard1Title.textContent = "Tagliatelle Bolognese"
  recipeCard1Price.textContent = "$20"
  recipeCard1Desc.textContent = "Classic slow-braised beef & pork ragù with San Marzano tomatoes and fresh Parmigiano."

  recipeCard2Title.textContent = "Truffle Cacio e Pepe"
  recipeCard2Price.textContent = "$22"
  recipeCard2Desc.textContent = "Pecorino Romano DOP, crushed black pepper, and Umbrian black truffle emulsion."

  recipeCard3Title.textContent = "Wild Mushroom Agnolotti"
  recipeCard3Price.textContent = "$21"
  recipeCard3Desc.textContent = "Hand-folded pasta stuffed with roasted porcini, sage, and brown butter glaze."

  recipeCard4Title.textContent = "Burrata Pugliese"
  recipeCard4Price.textContent = "$16"
  recipeCard4Desc.textContent = "Fresh creamy burrata cheese, heirloom tomatoes, basil pesto, sourdough points."


  // append elements
  menuHeaderDiv.append(menuHeaderDivH1, menuHeaderSub)

  recipeCard1Header.append(recipeCard1Title, recipeCard1Price)
  recipeCard1.append(recipeCard1Header, recipeCard1Desc)

  recipeCard2Header.append(recipeCard2Title, recipeCard2Price)
  recipeCard2.append(recipeCard2Header, recipeCard2Desc)

  recipeCard3Header.append(recipeCard3Title, recipeCard3Price)
  recipeCard3.append(recipeCard3Header, recipeCard3Desc)

  recipeCard4Header.append(recipeCard4Title, recipeCard4Price)
  recipeCard4.append(recipeCard4Header, recipeCard4Desc)

  recipeGrid.append(
    recipeCard1,
    recipeCard2,
    recipeCard3,
    recipeCard4
  )

  menuWrapper.append(menuHeaderDiv, recipeGrid)

  container.append(menuWrapper)

}

export {menu}
