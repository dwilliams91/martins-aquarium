// This will need to import data and tips

import { getLocation } from "./LocationDataProvider.js";
import { createLocation } from "./Locations.js";

// this will need to create a function which 1) defines the selector
export function locationList() {
    // defines the selector area to place the text

    const locationArea = document.querySelector(".Travel__locations_flex");
    // gets data from provider

    const locations = getLocation()
    //  create a string with the data from tips

    let locationHTML = " "
    // create a loop which will go through the list

    for (const butthole of locations) {
        locationHTML += createLocation(butthole)

    }
    // this part puts in where the text needs to go

    locationArea.innerHTML += `
    
        ${ locations.map(location => createLocation(location)).join("")}
    }
    
    `

}

