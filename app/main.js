import WeatherController from "./controllers/weather-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import TodoController from "./controllers/todo-controller.js";
import ImageController from "./controllers/image-controller.js";

class App {
  constructor() {
    this.imageController = new ImageController();
    this.weatherController = new WeatherController();
    this.quoteController = new QuoteController();
    this.todoController = new TodoController();
  }
}

window["app"] = new App();
