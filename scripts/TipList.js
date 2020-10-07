// This will need to import data and tips
import {getTips} from './TipDataProvider.js'
import {createTips} from './Tips.js'
// this will need to create a function which 1) defines the selector

export function tipList(){
    // defines the selector area to place the text
    const tipArea=document.querySelector(".Travel__tips")
    // gets data from provider
    const tips=getTips()
    //  create a string with the data from tips
    let tipsHTML=" "
    // create a loop which will go through the list
    for (const butthole of tips){
        tipsHTML +=createTips(butthole)

    }
    // this part puts in where the text needs to go
    tipArea.innerHTML +=`
    <div class=flexTips> 
    ${tipsHTML}
    </div>
    `

}
