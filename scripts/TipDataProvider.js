const tipCollection =[
    {image:"https://www.travelinglifestyle.net/wp-content/uploads/2017/02/travel-qoute-age-is-no-barrier-when-it-comes-to-travel-759x500.jpg"},
    {image:"https://s27363.pcdn.co/wp-content/uploads/2017/09/Once-A-Year.jpg.optimal.jpg"},
    {image:"https://intrepid-guewuklbkgvxhkhdo.stackpathdns.com/wp-content/uploads/2019/11/Best-Inspirational-Travel-Quotes-in-2020.jpg"}
]
export const getTips = () => {
    return tipCollection.slice()
}