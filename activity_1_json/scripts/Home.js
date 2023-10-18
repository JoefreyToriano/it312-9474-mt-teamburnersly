let sortAscending = true;

// Function to calculate the average rating for each recipe
function calculateAverageRatings() {
    for (const recipe of recipes) {
        const ratings = recipe.allRatings;
        if (ratings.length === 0) {
            recipe.averageRating = 0;
        } else {
            const sum = ratings.reduce((total, rating) => total + rating.rating,0);
            recipe.averageRating = sum / ratings.length;
        }
    }

    recipes.sort((a, b) => b.averageRating - a.averageRating);
}

function viewRecipe(recipeId) {
    sessionStorage.setItem("choosenRecipe",recipeId)
    window.location.href = "recipePage.html"
}

// Function to display the search results
function displaySearchResults(results) {
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p>No matching recipes found.</p>';
    } else {
        results.forEach(recipe => {
            var imgUrl = recipe.recipePic;
            const recipeElement = document.createElement('div');
            recipeElement.innerHTML = `
                <img src="${imgUrl}" alt="${recipe.recipeName}">
                <h2>${recipe.recipeName}</h2>
                <p>${recipe.recipeDesc}</p>
                <p>Rating: ${recipe.averageRating}</p>
                <p>${generateStarRatingHTML(recipe.averageRating)}</p>
            `;
            recipeElement.addEventListener('click', () => viewRecipe(recipe.recipeId))
            searchResultsContainer.appendChild(recipeElement);
        });
    }
}

// Function to generate star rating HTML
function generateStarRatingHTML(rating) {
    const starImage = `<img id="starImg" src="images/star.png" alt="Star">`;
    return starImage.repeat(rating);
}

// Function to sort and display search results
function sortAndDisplaySearchResults() {
    calculateAverageRatings();
    const searchResults = recipes.filter(recipe => recipe.recipeName.toLowerCase().includes(recipeSearchInput.value.toLowerCase()));
    if (sortAscending) {
        searchResults.sort((a, b) => a.averageRating - b.averageRating); // Sort in ascending order
    } else {
        searchResults.sort((a, b) => b.averageRating - a.averageRating); // Sort in descending order
    }
    displaySearchResults(searchResults);
    sortAscending = !sortAscending; // Toggle the sort order
}

const recipeSearchInput = document.getElementById('recipeSearch');
const searchResultsContainer = document.getElementById('searchResults');
const sortButton = document.getElementById('sortButton'); 

// Add an event listener to the sort button
sortButton.addEventListener('click', sortAndDisplaySearchResults);

// Fetch recipe data from the JSON file
fetch('data/Recipes.json')
    .then(response => response.json())
    .then(data => {
        const jsonDataString = JSON.stringify(data);
        localStorage.setItem('recipeData', jsonDataString)

        window.recipes = data;
        recipeSearchInput.addEventListener('input', sortAndDisplaySearchResults);
        sortAndDisplaySearchResults();
    })
    .catch(error => console.error('Error fetching recipe data:', error));
