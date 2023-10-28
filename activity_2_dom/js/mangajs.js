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
    this.chapterOffset = 0;
    this.totalChaptersLoaded = 0;
    document
      .getElementById("viewMoreTrending")
      .addEventListener("click", () => this.viewMoreTrending());
    document
      .getElementById("viewTopPublishing")
      .addEventListener("click", () => this.viewMorePublishing());
    document
      .getElementById("viewTopUpcoming")
      .addEventListener("click", () => this.viewMoreUpcoming());
    document
      .getElementById("loadMoreChapters")
      .addEventListener("click", () => this.loadMoreChapters());
    document
      .getElementById("viewMostPopular")
      .addEventListener("click", () => this.viewMorePopular());
  }
  loadMoreChapters() {
    this.chapterOffset += 10;
    this.fetchChaptersFromKitsu(this.currentMangaId, true);
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
    fetch(
      `${this.baseURL}manga?filter%5Bstatus%5D=current&page&sort=-user_count&page[offset]=${offset}`
    )
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
    mangaDiv.addEventListener("click", () => this.openMangaModal(manga));
    return mangaDiv;
  }
  displayHomePage() {
    const sectionsToShow = [
      "trending",
      "top-publishing",
      "top-upcoming",
      "most-popular",
    ];
    sectionsToShow.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) section.style.display = "block";
    });

    const resultsSection = document.getElementById("results");
    if (resultsSection) resultsSection.style.display = "none";
  }
  search() {
    // Grab values from the input and selects
    const name = document.getElementById("name").value;

    // If the name is empty, display the homepage and return.
    if (!name.trim()) {
      this.displayHomePage();
      return;
    }
    const setting = document.getElementById("setting").value;
    const demographics = document.getElementById("demographics").value;
    const themes = document.getElementById("themes").value;
    const genre = document.getElementById("genre").value;

    // Hides the Home page.
    const sectionsToHide = [
      "trending",
      "top-publishing",
      "top-upcoming",
      "most-popular",
    ];
    sectionsToHide.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) section.style.display = "none";
    });
    // Construct the API URL with filters
    let url = this.baseURL + "manga?";
    if (name) url += `&filter%5Btext%5D=${encodeURIComponent(name)}`;
    if (genre) url += `&filter%5Bgenres%5D=${encodeURIComponent(genre)}`;
    if (setting) url += `&filter[setting]=${setting}`;
    if (demographics) url += `&filter[demographics]=${demographics}`;
    if (themes) url += `&filter[themes]=${themes}`;
    console.log("Constructed URL:", url);

    const resultsDiv = document.getElementById("results");
    resultsDiv.style.display = "block";
    // Make the API call
    fetch(url)
      .then((response) => {
        console.log("API Response:", response); // Log the API response
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = ""; // clear previous results

        if (data.data.length === 0) {
          resultsDiv.innerHTML =
            "<div>No manga found for the given criteria.</div>";
        } else {
          data.data.forEach((manga) => {
            const mangaCard = this.createMangaCard(manga);
            resultsDiv.appendChild(mangaCard);
          });
        }
      })
      .catch((error) => {
        console.log(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  }
  setupEventListeners() {
    const toggleButton = document.getElementById("toggleFilters");
    const filtersDiv = document.getElementById("filtersDiv");
    const nameInput = document.getElementById("name");

    // Toggle filters visibility
    toggleButton.addEventListener("click", () => {
      if (filtersDiv.style.display === "none") {
        filtersDiv.style.display = "block";
        toggleButton.innerText = "Hide Filters";
      } else {
        filtersDiv.style.display = "none";
        toggleButton.innerText = "Show Filters";
      }
    });

    // Initiate search when something is typed in the search bar
    nameInput.addEventListener("input", () => {
      this.search();
    });

    // Add an event listener to the chapters button to toggle the chapters section
    document
      .getElementById("chapterBtn")
      .addEventListener("click", () => this.handleChapterButtonClick());
  }
  openMangaModal(manga) {
    // Fill in the modal content with manga details
    const modal = document.getElementById("mangaModal");
    document.getElementById("modalMangaImage").src =
      manga.attributes.posterImage.original;
    document.getElementById("modalMangaTitle").textContent =
      manga.attributes.titles.en ||
      manga.attributes.titles.en_jp ||
      "Unknown Title";
    document.getElementById("modalMangaSynopsis").textContent =
      manga.attributes.synopsis || "No synopsis available.";
    document.getElementById("modalUserCount").textContent =
      manga.attributes.userCount || "N/A";
    document.getElementById("modalFavoritesCount").textContent =
      manga.attributes.favoritesCount || "N/A";
    document.getElementById("modalAgeRating").textContent =
      manga.attributes.ageRating || "N/A";
    document.getElementById("modalStatus").textContent =
      manga.attributes.status || "N/A";
    document.getElementById("modalDateCreated").textContent =
      new Date(manga.attributes.createdAt).toLocaleDateString() || "N/A";
    document.getElementById("modalMangaScore").textContent =
      manga.attributes.averageRating || "N/A";
    // Show the modal
    modal.style.display = "block";

    // Add event listener to close the modal when clicked outside
    window.onclick = function (event) {
      if (event.target == modal) {
        closeModal();
      }
    };
    // Explicitly hide the "Load More" button and the chapters section when the modal opens
    const loadMoreButton = document.getElementById("loadMoreChapters");
    const chaptersDiv = document.getElementById("modalMangaChapters");

    loadMoreButton.style.display = "none";
    chaptersDiv.style.display = "none";

    // Show the modal
    modal.style.display = "block";
    this.fetchChaptersFromKitsu(manga.id);
  }
  handleChapterButtonClick() {
    const chaptersDiv = document.getElementById("modalMangaChapters");
    const loadMoreButton = document.getElementById("loadMoreChapters");

    if (
      chaptersDiv.style.display === "none" ||
      chaptersDiv.style.display === ""
    ) {
      chaptersDiv.style.display = "block";
      loadMoreButton.style.display = "block"; // Show the "Load More" button when chapters are displayed
    } else {
      chaptersDiv.style.display = "none";
      loadMoreButton.style.display = "none"; // Hide the "Load More" button when chapters are hidden
    }
  }
  fetchChaptersFromKitsu(mangaId, append = false) {
    console.log(mangaId);
    if (!append) {
      this.chapterOffset = 0; // Reset offset if not appending
    }
    this.currentMangaId = mangaId; // Store the current manga ID for later use

    fetch(
      `https://kitsu.io/api/edge/manga/${mangaId}/chapters?page[offset]=${this.chapterOffset}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const chapters = data.data;
        const chaptersDiv = document.getElementById("modalMangaChapters");
        const loadMoreButton = document.getElementById("loadMoreChapters");

        if (!append) {
          chaptersDiv.innerHTML = ""; // Clear only if not appending
          this.totalChaptersLoaded = 0; // Reset if not appending
        }

        chapters.forEach((chapter, index) => {
          const chapterDiv = document.createElement("div");
          const chapterNumber = this.totalChaptersLoaded + index + 1;
          chapterDiv.innerHTML = `<strong style="color: #3d92f5;">Chapter ${chapterNumber}:</strong> ${
            chapter.attributes.titles.en_jp ||
            chapter.attributes.canonicalTitle ||
            "Unknown Chapter"
          }`;

          // Add event listener to the chapter div
          chapterDiv.addEventListener("click", () =>
            showReadingOptions(chapter)
          );

          chaptersDiv.appendChild(chapterDiv);
        });

        // Check if there are more chapters to load
        if (chapters.length < 10) {
          loadMoreButton.style.display = "none"; // Hide the button if no more chapters
        } else {
          loadMoreButton.style.display = "block"; // Show the button if there might be more chapters
        }

        function showReadingOptions(chapter) {
          const chapterTitle =
            chapter.attributes.titles.en_jp ||
            chapter.attributes.canonicalTitle ||
            "Unknown Chapter";
          document.getElementById("modalChapterTitle").innerText = chapterTitle;

          const optionsList = document.getElementById("readingOptionsList");
          optionsList.innerHTML = `
          <li><a href="https://www.crunchyroll.com" target="_blank">Crunchyroll</a></li>
          <li><a href="https://mangakatana.com" target="_blank">MangaKatana</a></li>
          <li><a href="https://mangakakalot.com" target="_blank">MangaKakalot</a></li>
      `;

          document.getElementById("readingOptionsModal").style.display = "flex";
        }
        this.totalChaptersLoaded += chapters.length;
        this.chapterOffset += chapters.length; // Update the offset
      })
      .catch((error) => {
        console.log(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  }
}

function closeModal() {
  const modal = document.getElementById("mangaModal");
  modal.style.display = "none";
  // Hide chapters as well
  document.getElementById("modalMangaChapters").style.display = "none";
  document.getElementById("loadMoreChapters").style.display = "none";
}
const mangaSearchInstance = new MangaSearch();
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll('input[type="submit"], a');

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      let target = "";
      if (this.tagName === "INPUT") {
        target = this.parentElement.action;
      } else if (this.tagName === "A") {
        target = this.href;
      }

      document.body.classList.add("fade-out");

      setTimeout(function () {
        window.location.href = target;
      }, 500); // Matches the transition duration of 0.5s
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("fade-out");

  setTimeout(function () {
    document.body.classList.remove("fade-out");
  }, 50); // Short delay for starting the fade-in transition
});
