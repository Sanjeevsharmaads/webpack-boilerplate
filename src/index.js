import generateJokes from "./generateJokes";
import "./styles/main.scss"
import asset1 from "./assets/asset1.jpg"

const assetContainer = document.getElementById('asset1')
assetContainer.src = asset1;

console.log(generateJokes())