// Function to calculate the average rating for each recipe
function calculateAverageRatings() {
    for (const recipe of recipes) {
        const ratings = recipe.allRatings;
        if (ratings.length === 0) {
            recipe.averageRating = 0;
        } else {
            const sum = ratings.reduce((total, rating) => total + rating.rating, 0);
            recipe.averageRating = sum / ratings.length;
        }
    }

    // Sort the recipes by average rating immediately after calculating ratings
    recipes.sort((a, b) => b.averageRating - a.averageRating);
}

// Function to display the search results
function displaySearchResults(results) {
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p>No matching recipes found.</p>';
    } else {
        results.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.innerHTML = `
                <h2>${recipe.recipeName}</h2>
                <p>${recipe.recipeDesc}</p>
                <p>Rating: ${recipe.averageRating}</p>
                <p>${generateStarRatingHTML(recipe.averageRating)}</p>
            `;
            searchResultsContainer.appendChild(recipeElement);
        });
    }
}

// Function to generate star rating HTML
function generateStarRatingHTML(rating) {
    const starImage = `<img src="images/star.png" alt="Star">`;
    return starImage.repeat(rating);
}

// Function to sort and display recipes by rating
function sortAndDisplayRecipes() {
    calculateAverageRatings();
    const searchResults = recipes.filter(recipe => recipe.recipeName.toLowerCase().includes(recipeSearchInput.value.toLowerCase()));
    searchResults.sort((a, b) => b.averageRating - a.averageRating);
    displaySearchResults(searchResults);
}

const recipeSearchInput = document.getElementById('recipeSearch');
const searchResultsContainer = document.getElementById('searchResults');

// Fetch recipe data from the JSON file
fetch('data/Recipes.json')
    .then(response => response.json())
    .then(data => {
        window.recipes = data;
        recipeSearchInput.addEventListener('input', sortAndDisplayRecipes);
        sortAndDisplayRecipes(); // Sort and display recipes when data is loaded
    })
    .catch(error => console.error('Error fetching recipe data:', error));
