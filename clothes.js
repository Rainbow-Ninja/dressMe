const axios = require("axios");

async function getPicture(){
    let res = await axios.get(`https://randomuser.me/api/`)
    console.log(res.data.results)
    return res.data.results.picture.medium;
}


var picture = document.getElementById("picture");
console.log(getPicture())
picture.style.backgroundImage = getPicture()

getPicture()