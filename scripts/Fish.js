
export const Fish = (fishObj) => {
    return `

    <div class=fishItem>
    <div class=fishItem__pic>
        <img class=fishItem__pic-displayed
            src="${fishObj.Image}">
    </div>
    <div class=fishItem__info>
        <p class=fishItem__info--species>Species:${fishObj.Species}</p>
        <p class=fishItem__info--length>Length:${fishObj.Length}</p>
        <p class=fishItem__info--name>Name:${fishObj.Name}</p>
        <p class=fishItem__info--location>Location:${fishObj.Location}</p>
        <p class=fishItem__info--food>Food: ${fishObj.Food}</p>
    </div>
</div>
    `
}

