function createCard(title, imageUrl) {
  // Create a new card element
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-4");

  // Build the card's HTML structure
  card.innerHTML = `
      <div class="card h-100">
        <img class="card-img-top w-100" src="${imageUrl}" alt="${title}" />
        <div class="card-body">
          <h5 class="font-sans-serif fw-bold fs-md-0 fs-lg-1">${title}</h5>
          <a class="text-muted fs--1 stretched-link text-decoration-none" href="#!">Learn More</a>
        </div>
      </div>
    `;

  return card;
}

function displayCardsFromData(data) {
  const cardContainer = document.getElementById("mmuCardContainer");

  // Loop through the data and create a card for each item
  data.forEach((item) => {
    const card = createCard(item.title, item.imageUrl);
    cardContainer.appendChild(card);
  });
}

// Fetch data from a JSON file (you can replace this with your own data source)
fetch("assets/js/mmuData.json")
  .then((response) => response.json())
  .then((data) => {
    displayCardsFromData(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
