export function createLocation(locationObj) {
    return  `<div class=Travel__locations__Item>
<img class=travel__location__pics
    src= ${locationObj.image} alt="">
<p> ${locationObj.caption}</p>
</div>`
}