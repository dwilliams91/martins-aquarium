const fishCollection =[
    {
        Image:"https://i.pinimg.com/originals/94/f9/60/94f96079e6e5f5c2895bc39c929f0a0a.jpg",
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
        Image:"https://m.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg",
        Species: "Blue Tang",
        Name: "Dory",
        Length: 10,
        Location: "IndoPacific",
        Food: "Plankton"
    },
    {
        Image:"https://i.pinimg.com/originals/94/f9/60/94f96079e6e5f5c2895bc39c929f0a0a.jpg",
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
        Image:"https://m.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg",
        Species: "Blue Tang",
        Name: "Dory",
        Length: 10,
        Location: "IndoPacific",
        Food: "Plankton"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}