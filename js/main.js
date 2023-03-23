const ratings = document.querySelector(".ratings")
const form = document.querySelector(".main-form")
let currentRating = 0
let previousButton = null

ratings.addEventListener("click", (e) => {
  switch(e.target.value){
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      applyActive(e.target)
      break;
    default:
      break;
  }
})

function applyActive(element){
  currentRating = element.value
  resetColor(previousButton)
  previousButton = element
  element.classList.add("active")
}

function resetColor(element){
  if(element!==null)
    element.classList.remove("active")
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  document.querySelector(".rating-panel").classList.add("hide")
  document.querySelector(".thank-panel").classList.remove("hide")
  document.querySelector(".your-rating").innerHTML = currentRating
})