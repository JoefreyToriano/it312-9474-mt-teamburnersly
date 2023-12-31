let sortAscending = false;
let type = "All"

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
            var imgUrl = recipe.recipePicture;
            const recipeElement = document.createElement('div');
            recipeElement.innerHTML = `
                
                <div>
                    <h2>${recipe.recipeName}</h2>
                    <p>${recipe.recipeDesc}</p>
                    <p>Rating: ${recipe.averageRating.toFixed(1)}</p>
                    <p>${generateStarRatingHTML(recipe.averageRating)}</p>
                </div>
                <img src="${imgUrl}" alt="${recipe.recipeName}">
            `;
            recipeElement.addEventListener('click', () => viewRecipe(recipe.recipeId))
            recipeElement.setAttribute("class","homeRecipeTab")
            searchResultsContainer.appendChild(recipeElement);
        });
    }
}

// Function to generate star rating HTML
function generateStarRatingHTML(rating) {
    const starImage = `<img id="starImg" src="images/icons/star_icon.svg" alt="Star">`;
    return starImage.repeat(rating);
}

function setType(type1){
    type=type1
    sortAndDisplaySearchResults()
}

function getRecipeByType(recipeList){
    if(type==="All"){
        return recipeList
    }
    chosenRecipe = []
    for(let i = 0; i < recipeList.length; i++){
        if(recipeList[i].recipeType==type){
            chosenRecipe.push(recipeList[i])
        }
    }
    return chosenRecipe 
}

// Function to sort and display search results
async function sortAndDisplaySearchResults() {
    calculateAverageRatings();
    var searchResults = recipes.filter(recipe => recipe.recipeName.toLowerCase().includes(recipeSearchInput.value.toLowerCase()));
    if (sortAscending) {
        searchResults.sort((a, b) => a.averageRating - b.averageRating); // Sort in ascending order
    } else {
        searchResults.sort((a, b) => b.averageRating - a.averageRating); // Sort in descending order
    }    
    searchResults = await getRecipeByType(searchResults)
    displaySearchResults(searchResults);
    sortAscending = !sortAscending; // Toggle the sort order
}

const recipeSearchInput = document.getElementById('recipeSearch');
const searchResultsContainer = document.getElementById('searchResults');
const sortButton = document.getElementById('sortButton'); 

// Add an event listener to the sort button
sortButton.addEventListener('click', sortAndDisplaySearchResults);

// Fetch recipe data from the JSON file


        const jsonDataString = JSON.stringify(JSON.parse(localStorage.getItem("allRecipes")));
        localStorage.setItem('recipeData', jsonDataString)

        window.recipes = JSON.parse(localStorage.getItem("allRecipes"));
        recipeSearchInput.addEventListener('input', sortAndDisplaySearchResults);
        sortAndDisplaySearchResults();
