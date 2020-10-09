const fishCollection = [
    {
        Image: "https://i.pinimg.com/originals/94/f9/60/94f96079e6e5f5c2895bc39c929f0a0a.jpg",
        Species: "Scorpian Fish",
        Name: "Flub Holy",
        Length: 9,
        Location: "Indian Ocean",
        Food: "Crustaceans and Smaller Fish"
    },
    {
        Image: "https://d2j6dbq0eux0bg.cloudfront.net/images/5391016/1117801547.jpg",
        Species: "Angel Fish",
        Name: "Bubbles Soldier",
        Length: 10,
        Location: "Amazon River",
        Food: "Bugs and small fish"
    },
    {
        Image: "https://m.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg",
        Species: "Blue Tang",
        Name: "Dory Holy",
        Length: 18,
        Location: "IndoPacific",
        Food: "Plankton"
    },
    {
        Image: "https://i.pinimg.com/originals/94/f9/60/94f96079e6e5f5c2895bc39c929f0a0a.jpg",
        Species: "Scorpian Fish",
        Name: "Flub Holy Soldier",
        Length: 15,
        Location: "Indian Ocean",
        Food: "Crustaceans and Smaller Fish"
    },
    {
        Image: "https://d2j6dbq0eux0bg.cloudfront.net/images/5391016/1117801547.jpg",
        Species: "Angel Fish",
        Name: "Bubbles Holy",
        Length: 3,
        Location: "Amazon River",
        Food: "Bugs and small fish"
    },
    {
        Image: "https://m.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg",
        Species: "Blue Tang",
        Name: "Dory Regular",
        Length: 7,
        Location: "IndoPacific",
        Food: "Plankton"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

// this filters fish divisable by 3 into holyfish

export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.Length % 3 === 0) {
            holyFish.push(fish)
        }

    }
    // console.log("holy fish "+holyFish)
    return holyFish
}
// this filters fish divisable by 5 into soldier

export const soldierFish = () => {
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish.Length % 5 === 0 && fish.Length % 3 !== 0) {
            soldiers.push(fish)

        }
        
    }
    return soldiers
    // this filters for the normal fish

}

export const nonHolyFish = () => {
    const regularFish = []
    for (const fish of fishCollection) {
        if (fish.Length % 3 !== 0 && fish.Length % 5 !== 0)
            regularFish.push(fish)
    }
    return regularFish
}