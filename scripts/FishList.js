import { useFish,mostHolyFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishContainer")
    const fishes = useFish()
    // the line below would filter the fish to just display holy fish
    
    // const fishes=mostHolyFish()
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