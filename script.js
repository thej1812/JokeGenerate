const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const emoji = document.querySelector(".emoji");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        
        // Change emoji randomly
        const emojis = ["😂", "🤣", "😆", "😹", "😜", "😝", "😎"];
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    })
    .catch(error => {
        console.error("Error fetching joke:", error);
        jokeContainer.textContent = "Oops! Something went wrong. 😢";
    });
}

btn.addEventListener("click", getJoke);
getJoke();
