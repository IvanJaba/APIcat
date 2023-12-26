const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";
const apiKey = "live_I86veglV2282H2eGwxFdJWUR2tmg1QZUQdRrqIBFT10pKbTXFyoOz9JgNdYoWtUU";

async function fetchHandler() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                "x-api-key": apiKey
            }
        });
        const data = await response.json();
        image.src = data[0].url;
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", () => {
    let isLoaded = image.complete;
    if (isLoaded) {
        fetchHandler();
    }
});

