import { useFish,mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

// This builds the html for whatever array we want
const buildFishContainerHTML= (arrayOfFish)=>{
    let fishHTMLRepresentation = " "
    
    // ${holyFish.map(taco => fish(taco)).join(``)}
    return `${arrayOfFish.map(taco=> Fish(taco)).join()}`
}






export const FishList = () => {
    
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishContainer")
    
    // the line below invokes the holyfish filter function from the data provider
    const holyFish=mostHolyFish()
    // then this line calls the function above that turns it into the html
    const holyFishHTML=buildFishContainerHTML(holyFish)


    const soldiers=soldierFish()
    const soldierFishHTML=buildFishContainerHTML(soldiers)

    const regular=nonHolyFish()
    const regularFishHTML=buildFishContainerHTML(regular)
    
    // ${locations.map(location => LocationAsHTML(location)).join("")}

    contentElement.innerHTML += `
    <article class="fishList">
    ${holyFish.map(taco=> Fish(taco)).join(``)}
    ${soldiers.map(monkeyButt=>Fish(monkeyButt)).join()}
    ${regular.map(practiceWithMapping=>Fish(practiceWithMapping)).join()}
    </article>
    `
}

// contentElement.innerHTML += `
//     <article class="fishList">
//     ${holyFishHTML}
//     ${soldierFishHTML}
//     ${regularFishHTML}
//     </article>
//     `

// ${holyFish.map(taco => fish(taco)).join(``)}