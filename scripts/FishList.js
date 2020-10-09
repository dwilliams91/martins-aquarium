import { useFish,mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
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

    const soldiers=soldierFish()
    const soldierFishHTML=buildFishContainerHTML(soldiers)

    const regular=nonHolyFish()
    const regularFishHTML=buildFishContainerHTML(regular)
    

    contentElement.innerHTML += `
    <article class="fishList">
    ${holyFishHTML}
    ${soldierFishHTML}
    ${regularFishHTML}
    </article>
    `
}