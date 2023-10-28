import axios from "axios";

function generateJoke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  }
  axios.get("https://icanhazdadjoke.com",config).then((res)=> console.log(res))
}

export default generateJoke;
