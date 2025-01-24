const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
       
        jokeContainer.textContent = `${item.joke}`;
    })
    .catch(error => {
       
        console.error("Error fetching joke:", error);
        jokeContainer.textContent = "Oops! Something went wrong. 😢";
    });
}

btn.addEventListener("click", getJoke);
getJoke();
