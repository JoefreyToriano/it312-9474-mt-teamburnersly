class MangaSearch {
  constructor() {
    this.baseURL = "https://kitsu.io/api/edge/";
    this.populateGenres();
    this.displayDefaultContent();
    this.currentPage = 1;
    this.setupEventListeners();
    this.trendingOffset = 0;
    this.publishingOffset = 0;
    this.upcomingOffset = 0;
    this.popularOffset = 0;
    document.getElementById('viewMoreTrending').addEventListener('click', () => this.viewMoreTrending());
document.getElementById('viewTopPublishing').addEventListener('click', () => this.viewMorePublishing());
document.getElementById('viewTopUpcoming').addEventListener('click', () => this.viewMoreUpcoming());
document.getElementById('viewMostPopular').addEventListener('click', () => this.viewMorePopular());
  }

  populateGenres() {
    fetch(this.baseURL + "genres")
      .then((response) => response.json())
      .then((data) => {
        const genreSelect = document.getElementById("genre");
        for (let genre of data.data) {
          const option = document.createElement("option");
          option.value = genre.id;
          option.textContent = genre.attributes.name;
          genreSelect.appendChild(option);
        }
      });
  }

  displayDefaultContent(section) {
    switch (section) {
      case "trending":
        this.fetchTrendingThisWeek();
        break;
      case "publishing":
        this.fetchTopPublishingManga();
        break;
      case "upcoming":
        this.fetchTopUpcomingManga;
      case "popular":
        this.fetchMostPopularManga;
      default:
        this.fetchTrendingThisWeek();
        this.fetchTopPublishingManga();
        this.fetchTopUpcomingManga();
        this.fetchMostPopularManga();
    }
  }
  fetchTrendingThisWeek(offset = 0) {
    const fetchURL = `${this.baseURL}manga?sort=-user_count&page[offset]=${offset}`;
    console.log("Fetching from:", fetchURL); // Debugging line

    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.querySelector("#trending .results");

        data.data.forEach((manga) => {
          const mangaCard = this.createMangaCard(manga);
          resultsDiv.appendChild(mangaCard);
        });
      });
}
viewMoreTrending() {
    this.trendingOffset += 10;
    this.fetchTrendingThisWeek(this.trendingOffset);
}
  fetchTopPublishingManga(offset = 0) {
    fetch(`${this.baseURL}manga?filter%5Bstatus%5D=current&page&sort=-user_count&page[offset]=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.querySelector("#top-publishing .results");

        data.data.forEach((manga) => {
          const mangaCard = this.createMangaCard(manga);
          resultsDiv.appendChild(mangaCard);
        });
      });
}
viewMorePublishing() {
  this.publishingOffset += 10;
  this.fetchTopPublishingManga(this.publishingOffset);
}

fetchTopUpcomingManga(offset = 0) {
    fetch(`${this.baseURL}manga?filter[status]=upcoming&page[offset]=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.querySelector("#top-upcoming .results");

        data.data.forEach((manga) => {
          const mangaCard = this.createMangaCard(manga);
          resultsDiv.appendChild(mangaCard);
        });
      });
}
viewMoreUpcoming() {
  this.upcomingOffset += 10;
  this.fetchTopUpcomingManga(this.upcomingOffset);
}

fetchMostPopularManga(offset = 0) {
    fetch(`${this.baseURL}manga?sort=-favoritesCount&page[offset]=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.querySelector("#most-popular .results");

        data.data.forEach((manga) => {
          const mangaCard = this.createMangaCard(manga);
          resultsDiv.appendChild(mangaCard);
        });
      });
}
viewMorePopular() {
  this.popularOffset += 10;
  this.fetchMostPopularManga(this.popularOffset);
}

  createMangaCard(manga) {
    const mangaDiv = document.createElement("div");
    mangaDiv.classList.add("manga-card");
    mangaDiv.dataset.mangaId = manga.id;

    const img = document.createElement("img");
    img.src =
      manga.attributes.posterImage && manga.attributes.posterImage.original
        ? manga.attributes.posterImage.original
        : " ";
    img.alt = `Image of ${
      manga.attributes.titles.en ||
      manga.attributes.titles.en_jp ||
      "Unknown Title"
    }`;
    img.onerror = function () {
      this.onerror = null;
      this.src = " ";
    };
    mangaDiv.appendChild(img);

    const title = document.createElement("div");
    title.classList.add("manga-title");
    title.innerText =
      manga.attributes.titles.en ||
      manga.attributes.titles.en_jp ||
      "Unknown Title";
    mangaDiv.appendChild(title);
    mangaDiv.addEventListener('click', () => this.openMangaModal(manga));
    return mangaDiv;
  }
  displayHomePage() {
    const sectionsToShow = ['trending', 'top-publishing', 'top-upcoming', 'most-popular'];
    sectionsToShow.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.style.display = 'block';
    });

    const resultsSection = document.getElementById('results');
    if (resultsSection) resultsSection.style.display = 'none';
}
  search() {
    // Grab values from the input and selects
    const name = document.getElementById('name').value;

    // If the name is empty, display the homepage and return.
    if (!name.trim()) {
        this.displayHomePage();
        return;
    }
      const setting = document.getElementById('setting').value;
      const demographics = document.getElementById('demographics').value;
      const themes = document.getElementById('themes').value;
      const genre = document.getElementById('genre').value;
  
      // Hides the Home page.
      const sectionsToHide = ['trending', 'top-publishing', 'top-upcoming', 'most-popular'];
      sectionsToHide.forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) section.style.display = 'none';
      });
    // Construct the API URL with filters
    let url = this.baseURL + "manga?";
    if (name) url += `&filter%5Btext%5D=${encodeURIComponent(name)}`;
    if (genre) url += `&filter%5Bgenres%5D=${encodeURIComponent(genre)}`;
    if (setting) url += `&filter[setting]=${setting}`;
    if (demographics) url += `&filter[demographics]=${demographics}`;
    if (themes) url += `&filter[themes]=${themes}`;
    console.log("Constructed URL:", url);

    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    // Make the API call
    fetch(url)
        .then(response => {
            console.log("API Response:", response); // Log the API response
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // clear previous results

            if (data.data.length === 0) {
                resultsDiv.innerHTML = '<div>No manga found for the given criteria.</div>';
            } else {
                data.data.forEach(manga => {
                    const mangaCard = this.createMangaCard(manga);
                    resultsDiv.appendChild(mangaCard);
                });
            }
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error.message);
        });
}
setupEventListeners() {
  const toggleButton = document.getElementById('toggleFilters');
  const filtersDiv = document.getElementById('filtersDiv');
  const nameInput = document.getElementById('name');
  
  // Toggle filters visibility
  toggleButton.addEventListener('click', () => {
      if (filtersDiv.style.display === 'none') {
          filtersDiv.style.display = 'block';
          toggleButton.innerText = 'Hide Filters';
      } else {
          filtersDiv.style.display = 'none';
          toggleButton.innerText = 'Show Filters';
      }
  });

  // Initiate search when something is typed in the search bar
  nameInput.addEventListener('input', () => {
      this.search();
  });
  // Add an event listener to the chapters button to toggle the chapters section
  document.getElementById("chapterBtn").addEventListener("click", function() {
    const chaptersDiv = document.getElementById("modalMangaChapters");
    if (chaptersDiv.style.display === "none") {
      chaptersDiv.style.display = "block";
    } else {
      chaptersDiv.style.display = "none";
    }
  });
}
openMangaModal(manga) {
  // Fill in the modal content with manga details
  const modal = document.getElementById("mangaModal");
  document.getElementById("modalMangaImage").src = manga.attributes.posterImage.original;
  document.getElementById("modalMangaTitle").textContent = manga.attributes.titles.en || manga.attributes.titles.en_jp || "Unknown Title";
  document.getElementById("modalMangaSynopsis").textContent = manga.attributes.synopsis || "No synopsis available.";
  document.getElementById("modalUserCount").textContent = manga.attributes.userCount || "N/A";
  document.getElementById("modalFavoritesCount").textContent = manga.attributes.favoritesCount || "N/A";
  document.getElementById("modalAgeRating").textContent = manga.attributes.ageRating || "N/A";
  document.getElementById("modalStatus").textContent = manga.attributes.status || "N/A";
  document.getElementById("modalDateCreated").textContent = new Date(manga.attributes.createdAt).toLocaleDateString() || "N/A";
  document.getElementById("modalMangaScore").textContent = manga.attributes.averageRating || "N/A";
  // Show the modal
  modal.style.display = "block";
  
  // Add event listener to close the modal when clicked outside
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
      }
  }
  const chapterBtn = document.getElementById("chapterBtn");
  chapterBtn.dataset.mangaSlug = manga.attributes.slug;
  document.getElementById("chapterBtn").addEventListener("click", function() {
    const mangaSlug = this.dataset.mangaSlug;
    const kitsuUrl = `https://kitsu.io/manga/${mangaSlug}/chapters`;
    window.open(kitsuUrl, "_blank");
});
}
}

function closeModal() {
  const modal = document.getElementById("mangaModal");
  modal.style.display = "none";
  // Hide chapters as well
  document.getElementById("modalMangaChapters").style.display = "none";
  
}
const mangaSearchInstance = new MangaSearch();
