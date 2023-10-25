class AnimeSearcher {
  constructor() {
    this.elements = {
      animeInput: document.getElementById("animeInput"),
      genreSelect: document.getElementById("genreSelect"),
      typeSelect: document.getElementById("typeSelect"),
      yearInput: document.getElementById("yearInput"),
      ratingSelect: document.getElementById("ratingSelect"),
      statusSelect: document.getElementById("statusSelect"),
      seasonSelect: document.getElementById("seasonSelect"),
      resultsDiv: document.getElementById("results"),
      searchBtn: document.getElementById("searchBtn"),
      trendingDiv: document.getElementById("trendingAnime"),
      updatedDiv: document.getElementById("recentlyUpdatedAnime"),
      trendingHeader: document.getElementById("trendingHeader"),
      updatedHeader: document.getElementById("updatedHeader"),
      episodesBtn: document.getElementById("episodesBtn"),
    };
    this.inputElements = [
      this.elements.animeInput,
      this.elements.genreSelect,
      this.elements.typeSelect,
      this.elements.yearInput,
      this.elements.ratingSelect,
      this.elements.statusSelect,
      this.elements.seasonSelect,
    ];
    this.inputElements.forEach((input) => {
      input.addEventListener("input", () => {
        this.realTimeSearch();
      });
    });
    const filterSelectElements = [
      this.elements.genreSelect,
      this.elements.typeSelect,
      this.elements.ratingSelect,
      this.elements.statusSelect,
      this.elements.seasonSelect,
    ];
    filterSelectElements.forEach((filterSelect) => {
      filterSelect.addEventListener("change", () => {
        this.realTimeSearch();
      });
    });
    this.elements.trendingHeader = document.querySelector(".trendingHeader");
    this.elements.updatedHeader = document.querySelector(".updatedHeader");
    console.log("Trending Header:", this.elements.trendingHeader);
    console.log("Updated Header:", this.elements.updatedHeader);
    this.currentPage = 1;
    this.updatePageDisplay();
    this.elements.episodesBtn = document.getElementById("episodesBtn");
    this.elements.prevBtn = document.getElementById("prevBtn");
    this.elements.nextBtn = document.getElementById("nextBtn");
    this.elements.prevBtn.addEventListener("click", this.prevPage.bind(this));
    this.elements.nextBtn.addEventListener("click", this.nextPage.bind(this));
    this.elements.searchBtn.addEventListener("click", () => {
      this.elements.resultsDiv.innerHTML = ""; // Clear previous results

      if (this.isAnyInputFilled()) {
        this.elements.trendingDiv.style.display = "none";
        this.elements.updatedDiv.style.display = "none";
        this.elements.trendingHeader.style.display = "none";
        this.elements.updatedHeader.style.display = "none";
        this.search();
      } else {
        // If no input is filled, display trending and updated sections again
        this.elements.trendingDiv.style.display = "block";
        this.elements.updatedDiv.style.display = "block";
        this.elements.trendingHeader.style.display = "block";
        this.elements.updatedHeader.style.display = "block";
      }
    });
    this.debounceTimer = null;
  }
  realTimeSearch() {
    // Clear previous results and reset the current page
    this.elements.resultsDiv.innerHTML = "";
    this.currentPage = 1;
    this.updatePageDisplay();

    // Clear the previous debounce timer (if any)
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    // Set a new debounce timer
    this.debounceTimer = setTimeout(() => {
      // Check if the search input is empty
      const searchInputIsEmpty = !this.isAnyInputFilled();

      // Display/hide sections based on whether the search input is empty
      this.elements.trendingDiv.style.display = searchInputIsEmpty
        ? "block"
        : "none";
      this.elements.updatedDiv.style.display = searchInputIsEmpty
        ? "block"
        : "none";
      this.elements.trendingHeader.style.display = searchInputIsEmpty
        ? "block"
        : "none";
      this.elements.updatedHeader.style.display = searchInputIsEmpty
        ? "block"
        : "none";

      // Only call the search method if search input is not empty
      if (!searchInputIsEmpty) {
        this.search();
      }
    }, 600); // Adjust the debounce delay (in milliseconds) as needed
  }

  isAnyInputFilled() {
    return this.inputElements.some((input) => {
      if (input.type === "text" || input.type === "number") {
        return input.value.trim() !== "";
      } else if (input.type === "select-one") {
        return input.value && input.value !== "default"; // Assuming "default" is your default select value.
      }
    });
  }

  displayError(message) {
    this.elements.resultsDiv.innerHTML = `<div class="error-message">${message}</div>`;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.search();
    }
  }

  nextPage() {
    this.currentPage++;
    this.search();
  }

  updatePageDisplay() {
    const displayElem = document.getElementById("currentPageDisplay");
    if (displayElem) {
      displayElem.textContent = this.currentPage;
    }
  }

  appendResults(data) {
    if (!data.data || data.data.length === 0) {
      this.elements.resultsDiv.innerHTML = "No Result";
      this.elements.prevBtn.style.display = "none";
      this.elements.nextBtn.style.display = "none";
      return;
    }
    data.data.forEach((anime) => {
      const animeCard = this.createAnimeCard(anime);
      this.elements.resultsDiv.appendChild(animeCard);
    });
  }

  search(appendMode = false) {
    this.appendMode = appendMode;
    if (appendMode) {
      this.currentPage = 1;
      this.updatePageDisplay();
    }

    fetch(this.getSearchURL())
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch anime data.");
        }
        return res.json();
      })
      .then((data) => {
        this.displayResults(data);
        console.log(data);
      })
      .catch((error) => {
        this.displayError(
          "Failed to fetch anime data. Please try again later."
        );
        console.error("Error in search:", error);
      });
  }

  updateModalWithStatistics(statsData) {
    const watching = document.getElementById("animeWatching");
    const completed = document.getElementById("animeCompleted");
    const onHold = document.getElementById("animeOnHold");
    const dropped = document.getElementById("animeDropped");
    const planToWatch = document.getElementById("animePlanToWatch");

    const stats = statsData.data || {};

    watching.textContent = `Watching: ${stats.watching || "N/A"}`;
    completed.textContent = `Completed: ${stats.completed || "N/A"}`;
    onHold.textContent = `On Hold: ${stats.on_hold || "N/A"}`;
    dropped.textContent = `Dropped: ${stats.dropped || "N/A"}`;
    planToWatch.textContent = `Plan to Watch: ${stats.plan_to_watch || "N/A"}`;
  }

  openTrailerModal(url) {
    const trailerModal = document.getElementById("trailerModal");
    const trailerFrame = document.getElementById("trailerFrame");

    if (url.includes("youtube.com/watch?v=")) {
      url = url.replace("youtube.com/watch?v=", "youtube.com/embed/");
    }

    trailerFrame.src = url;
    trailerModal.style.display = "block";

    const closeTrailerModal = document.getElementById("closeTrailerModal");
    closeTrailerModal.onclick = () => {
      trailerModal.style.display = "none";
    };
    window.onclick = (event) => {
      if (event.target === trailerModal) {
        trailerModal.style.display = "none";
      }
    };
  }

  displayResults(data) {
    if (!this.appendMode) {
      this.elements.resultsDiv.innerHTML = "";
    }

    if (!data.data || data.data.length === 0) {
      this.elements.resultsDiv.innerHTML = "No Result";
      this.elements.prevBtn.style.display = "none";
      this.elements.nextBtn.style.display = "none";
      return;
    }

    if (this.currentPage === 1) {
      this.elements.prevBtn.style.display = "none";
    } else {
      this.elements.prevBtn.style.display = "block";
    }

    if (data.data.length < 10) {
      this.elements.nextBtn.style.display = "none";
    } else {
      this.elements.nextBtn.style.display = "block";
    }

    this.updatePageDisplay();
    data.data.forEach((anime) => {
      const animeCard = this.createAnimeCard(anime);
      this.elements.resultsDiv.appendChild(animeCard);
    });
  }

  getSearchURL() {
    const mainSearchTerm = this.elements.animeInput.value.trim();
    let year = this.elements.yearInput.value;
    let season = this.elements.seasonSelect.value;

    const paramsList = [
      mainSearchTerm && `q=${mainSearchTerm}`,
      this.elements.genreSelect.value &&
        `genres=${this.elements.genreSelect.value}`,
      this.elements.typeSelect.value &&
        `type=${this.elements.typeSelect.value}`,
      this.elements.yearInput.value && `year=${this.elements.yearInput.value}`,
      this.elements.ratingSelect.value &&
        `rating=${this.elements.ratingSelect.value}`,
      this.elements.statusSelect.value &&
        `status=${this.elements.statusSelect.value}`,
    ];

    // If both season and year are present, construct the URL to search by season
    if (year && season) {
      const seasonURL = `https://api.jikan.moe/v4/seasons/${year}/${season.toLowerCase()}`;

      // Ensure mainSearchTerm is added to the parameters for the season search
      if (mainSearchTerm) {
        return `${seasonURL}?q=${mainSearchTerm}`;
      }
      return seasonURL;
    }

    const validParams = paramsList.filter(Boolean);
    validParams.push(`page=${this.currentPage}`);
    return `https://api.jikan.moe/v4/anime?${validParams.join("&")}`;
  }

  createAnimeCard(anime) {
    const animeDiv = document.createElement("div");
    animeDiv.classList.add("anime-card");
    const img = document.createElement("img");
    img.src =
      anime.images && anime.images.jpg && anime.images.jpg.image_url
        ? anime.images.jpg.image_url
        : "path_to_fallback_image.jpg";
    img.alt = `Image of ${anime.title}`;
    img.onerror = function () {
      this.onerror = null;
      this.src = "path_to_fallback_image.jpg";
    };
    animeDiv.appendChild(img);
    const title = document.createElement("div");
    title.classList.add("anime-title");
    title.innerText = anime.title || "Unknown Title";
    animeDiv.appendChild(title);
    animeDiv.addEventListener("click", () => {
      openModal(anime);
    });
    return animeDiv;
  }
}

const animeSearcher = new AnimeSearcher();

function openModal(anime) {
  const modal = document.getElementById("animeModal");
  const animeImage = document.getElementById("animeImage");
  const animeTitle = document.getElementById("animeTitle");
  const animeDescription = document.getElementById("animeDescription");
  const animeType = document.getElementById("animeType");
  const animeGenre = document.getElementById("animeGenre");
  const animeReleaseYear = document.getElementById("animeReleaseYear");
  const animeStatus = document.getElementById("animeStatus");
  const animeInfoBtn = document.getElementById("animeInfoBtn");
  const trailerBtn = document.getElementById("trailerBtn");
  const episodesBtn = document.getElementById("episodesBtn");
  this.currentAnime = anime;

  console.log("Opening modal for anime:", anime.mal_id);

  animeImage.src = anime.images.jpg.large_image_url || "";
  animeTitle.textContent = anime.title || "Unknown Title";
  animeDescription.textContent = anime.synopsis || "Description not available.";
  animeType.textContent = `Type: ${anime.type || "Unknown"}`;
  animeGenre.textContent = `Genre: ${
    anime.genres.map((genre) => genre.name).join(", ") || "Unknown"
  }`;
  animeReleaseYear.textContent = `Released: ${
    new Date(anime.aired.from).getFullYear() || "Unknown"
  }`;
  animeStatus.textContent = `Status: ${anime.status || "Unknown"}`;

  if (episodesBtn) {
    // Only bind if the button exists
    episodesBtn.addEventListener("click", () => {
      console.log("Episodes button clicked.");
      if (this.currentAnime) {
        console.log("Fetching episodes for:", this.currentAnime.title);
        this.fetchEpisodes(this.currentAnime);
      } else {
        console.error("No anime selected.");
      }
    });
  }

  fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}/statistics`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((statsData) => {
      console.log("Received statsData:", statsData);
      this.updateModalWithStatistics(statsData);
    })
    .catch((error) => {
      console.error("Error fetching statistics:", error);
      if (error.message.includes("429")) {
        console.warn("You've hit the rate limit for the Jikan API.");
      }
    });

  modal.style.display = "block";

  animeInfoBtn.onclick = () => {
    window.open(`https://myanimelist.net/anime/${anime.mal_id}`, "_blank");
  };
  trailerBtn.onclick = () => {
    fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}/videos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.data && data.data.promo) {
          const trailer = data.data.promo[0]?.trailer;
          if (trailer && trailer.url) {
            this.openTrailerModal(trailer.url);
          } else {
            alert("This anime doesn't have a recorded Official Trailer.");
          }
        } else {
          alert("No videos available for this anime.");
        }
      })
      .catch((error) => {
        console.error("Error fetching trailer:", error);
      });
  };

  const closeModal = document.getElementsByClassName("close-btn")[0];
  closeModal.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    } else if (event.target === document.getElementById("trailerModal")) {
      document.getElementById("trailerModal").style.display = "none";
    }
  };

  const closeAnimeModal = document.getElementById("closeAnimeModal");
  if (closeAnimeModal) {
    closeAnimeModal.onclick = () => {
      document.getElementById("animeModal").style.display = "none";
    };
  }
}

function fetchEpisodes(anime) {
  const episodesModal = document.getElementById("episodesModal");
  const episodesList = document.getElementById("episodesList");

  let episodeDetails = [];

  // Fetch episode details
  fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}/episodes`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      episodeDetails = data.data;

      // Clear previous episodes
      episodesList.innerHTML = "";

      let episodeCounter = 1; // Initialize episode counter

      // Display episodes
      episodeDetails.forEach((episodeDetail) => {
        const episodeCard = createEpisodeCard(
          episodeDetail,
          anime.images.jpg.large_image_url || "",
          episodeCounter++
        );
        episodesList.appendChild(episodeCard);
      });

      episodesModal.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching episodes:", error);
    });
}

function createEpisodeCard(episodeDetail, animeImage, episodeNumber) {
  const episodeDiv = document.createElement("div");
  episodeDiv.classList.add("episode-card");

  // Add episode image
  const img = document.createElement("img");
  img.src = animeImage || "path_to_fallback_image.jpg";
  img.alt = `Image of Episode ${episodeNumber}`;
  img.onerror = function () {
    this.onerror = null;
    this.src = "path_to_fallback_image.jpg";
  };
  episodeDiv.appendChild(img);

  // Add episode title
  const title = document.createElement("div");
  title.classList.add("episode-title");
  title.innerText = `Episode ${episodeNumber}: ${episodeDetail.title}`;
  episodeDiv.appendChild(title);

  // Add episode score
  const score = document.createElement("div");
  score.classList.add("episode-score");
  score.innerText = `Score: ${episodeDetail.score || "Unknown"}`;
  episodeDiv.appendChild(score);

  // Add episode date aired
  const dateAired = document.createElement("div");
  dateAired.classList.add("episode-date");
  dateAired.innerText = episodeDetail.aired
    ? new Date(episodeDetail.aired).toDateString()
    : "Unknown Date";
  episodeDiv.appendChild(dateAired);

  // Add episode forum link
  const forumLink = document.createElement("a");
  forumLink.classList.add("episode-forum");
  forumLink.href = episodeDetail.forum_url;
  forumLink.innerText = "Forums";
  forumLink.target = "_blank";
  episodeDiv.appendChild(forumLink);

  return episodeDiv;
}
const closeEpisodesModal = document.getElementById("closeEpisodesModal");
closeEpisodesModal.onclick = () => {
  episodesModal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === episodesModal) {
    episodesModal.style.display = "none";
  }
};
function updateModalWithStatistics(statsData) {
  const watching = document.getElementById("animeWatching");
  const completed = document.getElementById("animeCompleted");
  const onHold = document.getElementById("animeOnHold");
  const dropped = document.getElementById("animeDropped");
  const planToWatch = document.getElementById("animePlanToWatch");

  const stats = statsData.data || {};

  watching.textContent = `Watching: ${stats.watching || "N/A"}`;
  completed.textContent = `Completed: ${stats.completed || "N/A"}`;
  onHold.textContent = `On Hold: ${stats.on_hold || "N/A"}`;
  dropped.textContent = `Dropped: ${stats.dropped || "N/A"}`;
  planToWatch.textContent = `Plan to Watch: ${stats.plan_to_watch || "N/A"}`;
}

function openTrailerModal(url) {
  const trailerModal = document.getElementById("trailerModal");
  const trailerFrame = document.getElementById("trailerFrame");

  if (url.includes("youtube.com/watch?v=")) {
    url = url.replace("youtube.com/watch?v=", "youtube.com/embed/");
  }

  trailerFrame.src = url;
  trailerModal.style.display = "block";

  const closeTrailerModal = document.getElementById("closeTrailerModal");
  closeTrailerModal.onclick = () => {
    trailerModal.style.display = "none";
  };
  window.onclick = (event) => {
    if (event.target === trailerModal) {
      trailerModal.style.display = "none";
    }
  };
}

function displayResults(data) {
  if (!this.appendMode) {
    this.elements.resultsDiv.innerHTML = "";
  }

  if (!data.data || data.data.length === 0) {
    this.elements.resultsDiv.innerHTML = "No Result";
    this.elements.prevBtn.style.display = "none";
    this.elements.nextBtn.style.display = "none";
    return;
  }

  if (this.currentPage === 1) {
    this.elements.prevBtn.style.display = "none";
  } else {
    this.elements.prevBtn.style.display = "block";
  }

  if (data.data.length < 10) {
    this.elements.nextBtn.style.display = "none";
  } else {
    this.elements.nextBtn.style.display = "block";
  }

  this.updatePageDisplay();
  data.data.forEach((anime) => {
    const animeCard = this.createAnimeCard(anime);
    this.elements.resultsDiv.appendChild(animeCard);
  });
}
function createCard(anime) {
  const animeDiv = document.createElement("div");
  animeDiv.classList.add("anime-card");
  const img = document.createElement("img");
  img.src =
    anime.images && anime.images.jpg && anime.images.jpg.image_url
      ? anime.images.jpg.image_url
      : "path_to_fallback_image.jpg";
  img.alt = `Image of ${anime.title}`;
  img.onerror = function () {
    this.onerror = null;
    this.src = "path_to_fallback_image.jpg";
  };
  animeDiv.appendChild(img);
  const title = document.createElement("div");
  title.classList.add("anime-title");
  title.innerText = anime.title || "Unknown Title";
  animeDiv.appendChild(title);
  animeDiv.addEventListener("click", () => {
    this.openModal(anime);
  });
  return animeDiv;
}

function fetchTrending() {
  fetch("https://api.jikan.moe/v4/top/anime?page=1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch trending anime.");
      }
      return response.json();
    })
    .then((data) => {
      addAnimeToDom(data.data, trendingAnime);
    })
    .catch((error) => {
      trendingAnime.innerHTML = `<p class="error-message">${error.message}</p>`;
    });
}

function fetchRecentlyUpdated() {
  fetch("https://api.jikan.moe/v4/seasons/now")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch recently updated anime.");
      }
      return response.json();
    })
    .then((data) => {
      addAnimeToDom(data.data, recentlyUpdatedAnime);
    })
    .catch((error) => {
      recentlyUpdatedAnime.innerHTML = `<p class="error-message">${error.message}</p>`;
    });
}
const trendingAnime = document.getElementById("trendingAnime");
const recentlyUpdatedAnime = document.getElementById("recentlyUpdatedAnime");

// Define the addAnimeToDom function
function addAnimeToDom(animeData, domElement) {
  animeData.forEach((anime) => {
    const animeCard = createCard(anime, "anime-card-class"); // Adjust the class name as needed
    domElement.appendChild(animeCard);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  fetchTrending();
  fetchRecentlyUpdated();
  document.getElementById("filterIcon").addEventListener("click", function () {
    let filters = document.getElementById("filterSection");
    if (filters.style.display === "none" || filters.style.display === "") {
      filters.style.display = "block";
    } else {
      filters.style.display = "none";
    }
  });
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";
});
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateFooter() {
  if (isElementInViewport(document.querySelector("footer"))) {
    document.querySelector(".footer-logo").style.opacity = "1";
    document.querySelector(".footer-logo").style.transform = "translateY(0)";

    document.querySelector(".footer-disclaimer").style.opacity = "1";
    document.querySelector(".footer-disclaimer").style.transform =
      "translateX(0)";

    document.querySelector(".footer-manga-btn").style.opacity = "1";
    document.querySelector(".footer-manga-btn").style.transform =
      "translateX(0)";

    document.querySelector(".footer-copyright").style.opacity = "1";
    document.querySelector(".footer-copyright").style.transform =
      "translateY(0)";

    // Remove the scroll event listener once the animation is triggered
    window.removeEventListener("scroll", animateFooter);
  }
}

// Add scroll event listener
window.addEventListener("scroll", animateFooter);

const bgAnimation = document.getElementById("bgAnimation");

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("colorBox");
  bgAnimation.append(colorBox);
}
