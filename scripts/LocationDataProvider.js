const locationCollection = [
    {
        image: "https://www.turtleairways.com/wp-content/uploads/2015/06/travel-to-fiji.jpg",
    caption: "Fiji"
    },
    {
        image: "https://images.unsplash.com/photo-1544531846-873b4e5cdc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        caption: "Guam"
    },
    {
        image: "https://images.unsplash.com/photo-1580725869538-9b164c27c44f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            caption: "Micronesia"
    },
]
export function getLocation(){
    return locationCollection.slice()
}