const fishCollection = [
    {
        Image: "https://i.pinimg.com/originals/94/f9/60/94f96079e6e5f5c2895bc39c929f0a0a.jpg",
        Species: "Scorpian Fish",
        Name: "Flub",
        Length: 9,
        Location: "Indian Ocean",
        Food: "Crustaceans and Smaller Fish"
    },
    {
        Image: "https://d2j6dbq0eux0bg.cloudfront.net/images/5391016/1117801547.jpg",
        Species: "Angel Fish",
        Name: "Bubbles",
        Length: 2,
        Location: "Amazon River",
        Food: "Bugs and small fish"
    },
    {
        Image: "https://m.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg",
        Species: "Blue Tang",
        Name: "Dory",
        Length: 18,
        Location: "IndoPacific",
        Food: "Plankton"
    },
    {
        Image: "https://i.pinimg.com/originals/94/f9/60/94f96079e6e5f5c2895bc39c929f0a0a.jpg",
        Species: "Scorpian Fish",
        Name: "Flub 2",
        Length: 15,
        Location: "Indian Ocean",
        Food: "Crustaceans and Smaller Fish"
    },
    {
        Image: "https://d2j6dbq0eux0bg.cloudfront.net/images/5391016/1117801547.jpg",
        Species: "Angel Fish",
        Name: "Bubbles 2",
        Length: 3,
        Location: "Amazon River",
        Food: "Bugs and small fish"
    },
    {
        Image: "https://m.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg",
        Species: "Blue Tang",
        Name: "Dory 2",
        Length: 12,
        Location: "IndoPacific",
        Food: "Plankton"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

// filtering

export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.Length % 3 === 0) {
            holyFish.push(fish)
        }
        
    }
    console.log(holyFish)
    return holyFish
}

// export const soldierFish = () => {
//     const soldiers=[]
//     for (const fish of fishCollection) {
//         if (fish.Length % 5===0 && fish.length % 3!==0){
//             soldiers.push(fish)
//         }
//     return soldiers
// }

// }
// export const nonHolyFish = () => {
//     const regularFish=[]
//     for (const fish of fishCollection){
//         if (fish.length % 3 !==0 && fish.length % 5 !==0)
//         regularFish.push(fish)
//     }
//     return regularFish
// }