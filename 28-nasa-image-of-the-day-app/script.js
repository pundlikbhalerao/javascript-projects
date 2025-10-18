const image = document.getElementById("image");

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then((response) => response.json())
  .then((data) => {
    if (data.media_type === "image") {
      const imgEl = document.createElement("img");
      imgEl.src = data.url;
      imgEl.alt = data.title;

      const titleEl = document.createElement("h2");
      titleEl.textContent = data.title;

      const descEl = document.createElement("p");
      descEl.textContent = data.explanation;

      image.appendChild(titleEl);
      image.appendChild(imgEl);
      image.appendChild(descEl);
    } else {
      image.textContent = "Today's APOD is not an image.";
    }
  })
  .catch((error) => {
    console.error("Error fetching APOD:", error);
    image.textContent = "Failed to load NASA data.";
  });
