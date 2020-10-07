import { useFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishContainer")
    const fishes = useFish()
    
    // Add to the existing HTML in the content element
    let fishHTMLRepresentation = " "
    for (const fish of fishes) {
        fishHTMLRepresentation += Fish(fish)

    }

    contentElement.innerHTML += `
    <article class="fishList">
    ${fishHTMLRepresentation}
    </article>
    `
}