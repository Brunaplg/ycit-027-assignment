


function getCatImage() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            document.getElementById("catImage").src = data[0].url
        })
}

function getCatImage2() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            document.getElementById("catImage2").src = data[0].url
        })
}

function getCatImage3() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            document.getElementById("catImage3").src = data[0].url
        })
}
function getAllCatImages() {

    return Promise.all([getCatImage(), getCatImage2(), getCatImage3()])

        .then((data) => {
            document.getElementById("catImage").src = data[0].url
            document.getElementById("catImage2").src = data[0].url
            document.getElementById("catImage3").src = data[0].url
        })
}
