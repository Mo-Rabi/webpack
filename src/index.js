import generateJoke from "./generateJoke";
import { v4 as uuidv4 } from "uuid";
import "./style/main.scss";
import laugh from "./assets/laugh.jpg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laugh;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// console.log(uuidv4());
// console.log(generateJoke);
