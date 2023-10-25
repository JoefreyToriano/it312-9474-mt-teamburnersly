class MangaSearch {
  constructor() {
    this.baseURL = "https://kitsu.io/api/edge/";
    this.populateGenres();
    this.displayDefaultContent();
    this.currentPage = 1;
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

  fetchTrendingThisWeek() {
    fetch(
      this.baseURL +
        `trending/manga?page[limit]=20&page[offset]=${this.currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.querySelector("#trending .results");
        resultsDiv.innerHTML = ""; // clear any previous results

        data.data.forEach((manga) => {
          const mangaCard = this.createMangaCard(manga);
          resultsDiv.appendChild(mangaCard);
        });
      });
  }

  fetchTopPublishingManga() {
    fetch(
      this.baseURL +
        `manga?filter%5Bstatus%5D=current&?page[limit]=20&page[offset]=0&sort=-user_count`
    )
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.querySelector("#top-publishing .results");
        resultsDiv.innerHTML = ""; // clear any previous results

        data.data.forEach((manga) => {
          const mangaCard = this.createMangaCard(manga);
          resultsDiv.appendChild(mangaCard);
        });
      });
  }

  fetchTopUpcomingManga() {
    fetch(this.baseURL + "manga?filter[status]=upcoming")
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.querySelector("#top-upcoming .results");
        resultsDiv.innerHTML = ""; // clear any previous results
    
        data.data.forEach((manga) => {
          const mangaCard = this.createMangaCard(manga);
          resultsDiv.appendChild(mangaCard);
        });
      });
  }

  fetchMostPopularManga() {
    fetch(this.baseURL + "manga?sort=-favoritesCount")
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.querySelector("#most-popular .results");
        resultsDiv.innerHTML = ""; // clear any previous results

        data.data.forEach((manga) => {
          const mangaCard = this.createMangaCard(manga);
          resultsDiv.appendChild(mangaCard);
        });
      });
  }

  createMangaCard(manga) {
    const mangaDiv = document.createElement("div");
    mangaDiv.classList.add("manga-card");

    const img = document.createElement("img");
    img.src =
      manga.attributes.posterImage && manga.attributes.posterImage.medium
        ? manga.attributes.posterImage.medium
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

  // ... the rest of your search functions ...
}

const mangaSearchInstance = new MangaSearch();
