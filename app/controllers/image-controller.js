import ImageService from "../services/image-service.js";
import store from "../store.js";


//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function drawImage(){
let background = store.State.image.url
document.getElementById("bg-image").style.backgroundImage = `url${background}`
}




export default class ImageController {

  constructor() {
ImageService.getImage()
store.subscribe("image", drawImage)
  }
}


