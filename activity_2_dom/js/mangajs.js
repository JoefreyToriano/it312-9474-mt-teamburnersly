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

    return mangaDiv;
  }
  search() {
    // Grab values from the input and selects
    const name = document.getElementById('name').value;
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
}
}
const mangaSearchInstance = new MangaSearch();
