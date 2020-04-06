import ImageService from "../services/image-service.js";
import store from "../store.js";


//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function drawImage(){
  console.log("IMAGE CHANGED");
  
let background = store.State.image.large_url
console.log(background);

document.getElementById("bg-image").style.backgroundImage = `url(${background})`
}




export default class ImageController {

  constructor() {
ImageService.getImage()
store.subscribe("image", drawImage)
  }
}


