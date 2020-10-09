import { useFish,mostHolyFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

// This builds the html for whatever array we want
const buildFishContainerHTML= (arrayOfFish)=>{
    let fishHTMLRepresentation = " "
    for (const fish of arrayOfFish) {
        fishHTMLRepresentation += Fish(fish)
    }
    return fishHTMLRepresentation
}






export const FishList = () => {
    
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishContainer")
    
    // the line below would filter the fish to just display holy fish
    const holyFish=mostHolyFish()
    const holyFishHTML=buildFishContainerHTML(holyFish)
    


    contentElement.innerHTML += `
    <article class="fishList">
    ${holyFishHTML}
    </article>
    `
}