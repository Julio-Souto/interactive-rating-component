const ratings = document.querySelector(".ratings")
const form = document.querySelector(".main-form")
let currentRating = 0
let previousButton = null
document.querySelector(".thank-panel").classList.add("hide")

ratings.addEventListener("click", (e) => {
  switch(e.target.value){
    case "1":
      applyActive(e.target)
      break;
    case "2":
      applyActive(e.target)
      break;
    case "3":
      applyActive(e.target)
      break;
    case "4":
      applyActive(e.target)
      break;
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