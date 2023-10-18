let picked = "own"

async function showOwnRecipes(id){
    picked = "own"
    var allRecipes = await getAllRecipes()
    var chosenRecipes = await getRecipeByUserId(allRecipes,id)
    await clearAllRecipes()
    document.getElementById("currentFilter").innerHTML="OWN RECIPES"
    showRecipeInList(chosenRecipes)
}

async function showSavedRecipes(id){
    picked = "saved"
    var allRecipes = await getAllRecipes()
    var finalList = await getSavedRecipes(allRecipes,id)
    await clearAllRecipes()
    document.getElementById("currentFilter").innerHTML="SAVED RECIPES"
    showRecipeInList(finalList)
}

async function showAllRecipes(){
    picked = "all"
    var allRecipes = await getAllRecipes()
    await clearAllRecipes()
    document.getElementById("currentFilter").innerHTML="ALL RECIPES"
    showRecipeInList(allRecipes)
}

async function showAllRecipes2(){
    var currentList = await getAllRecipes()
    if (picked == "own"){
        currentList = await getRecipeByUserId(currentList,userId)
        document.getElementById("currentFilter").innerHTML = "OWN RECIPES"
    } else if (picked == "saved"){
        currentList = await getSavedRecipes(currentList,userId)
        document.getElementById("currentFilter").innerHTML = "SAVED RECIPES"
    } else{
        document.getElementById("currentFilter").innerHTML = "ALL RECIPES"
    }
    await clearAllRecipes()
    showRecipeInList(currentList)
}

async function showRecipeByType(type){
    var currentList = await getAllRecipes()
    var currentFilter = ""
    if (picked == "own"){
        currentList = await getRecipeByUserId(currentList,userId)
        currentFilter = "OWN RECIPES: "
    } else if (picked == "saved"){
        currentList = await getSavedRecipes(currentList,userId)
        currentFilter = "SAVED RECIPES: "
    }
    currentList = await getRecipeByType(currentList,type)
    await clearAllRecipes()
    var currentFilter = currentFilter + type.toUpperCase()
    document.getElementById("currentFilter").innerHTML = currentFilter
    showRecipeInList(currentList)
}

async function showRecipeById(id){
    var recipe = await getRecipeById(id) 
    var chosenUser = await getUserById(recipe.recipeAuthor)
    var div = document.createElement("div")
    div.onclick = function(){
        sessionStorage.setItem("choosenRecipe",id)
        window.location.href = "recipePage.html"
    }
    div.setAttribute("class","recipeTab")
    var pic = document.createElement("img")
    pic.src = (recipe.recipePicture)
    div.appendChild(pic)
    var title = document.createElement("div")
    title.setAttribute("class","recipeTabTitle")
    title.onclick = function(){
        sessionStorage.setItem("choosenRecipe",id)
        window.location.href = "recipePage.html"
    }
    /*Rate element in title*/
    var rating = document.createElement("p")
    rating.setAttribute("title","rating")
    var average = 0
    recipe.allRatings.forEach((item,index)=>{
        average = average+item.rating
    })
    average=average/recipe.allRatings.length
    var ratingText = document.createTextNode("Rating:"+average.toFixed(1)+"("+recipe.allRatings.length+")")
    rating.appendChild(ratingText)
    title.appendChild(rating)
    /*End*/
    var desc = document.createElement("p")
    var descText = document.createTextNode(recipe.recipeDesc)
    desc.setAttribute("title","desc")
    desc.appendChild(descText)
    title.appendChild(desc)
    var author = document.createElement("p")
    var authorText = document.createTextNode(chosenUser.firstName+" "+chosenUser.lastName)
    author.appendChild(authorText)
    title.appendChild(author)
    var recipeName = document.createElement("h2")
    var recipeNameText = document.createTextNode(recipe.recipeName)
    recipeName.appendChild(recipeNameText)
    title.appendChild(recipeName)
    div.appendChild(title)
    document.getElementById("recipeBox").appendChild(div)
}
/*Displays all the recipes in a list in the recipe box*/
async function showRecipeInList(chosenRecipes){
    if (chosenRecipes.length == 0){
        var noRecipe = document.createElement("h1")
        var noRecipeText = document.createTextNode("THERE ARE NO RECIPES AVAILABLE")
        noRecipe.appendChild(noRecipeText)
        noRecipe.setAttribute("id","noRecipe")
        document.getElementById("recipeBox").appendChild(noRecipe)
    } else{
        for (var i = 0;i<chosenRecipes.length;i++){
            showRecipeById(chosenRecipes[i].recipeId)
        }
    }
}
/*Clears all the recipes in the content box*/
async function clearAllRecipes(){
    var noRecipe = document.getElementById("noRecipe")
    if(noRecipe!=null){
        noRecipe.remove()
    } else{
        const recipeTab = Array.from(document.getElementsByClassName('recipeTab'))
        recipeTab.forEach(recipeTab => {
            recipeTab.remove();
        });
    }
}
/*Gets all the saved recipe of a user*/
async function getSavedRecipes(recipeList,userId){
    var user = await getUserById(userId)
    var favoriteRecipes = user.favoriteRecipes
    var filteredList = []
    for (var i = 0;i<recipeList.length;i++){
        for (var p = 0;p<favoriteRecipes.length;p++){
            if(favoriteRecipes[p]==recipeList[i].recipeId){
                filteredList.push(recipeList[i])
                break
            }
        }
    }
    return filteredList
}
/*Gets all the recipes made by a user*/
async function getRecipeByUserId(recipeList,userId){
    let chosenRecipe = []
    for(let i = 0; i < recipeList.length; i++){
        if(recipeList[i].recipeAuthor==userId){
            chosenRecipe.push(recipeList[i])
        }
    }
    return chosenRecipe
}
/*Filters the recipe list based on the recipe type*/
async function getRecipeByType(recipeList,type){
    let chosenRecipe = []
    for(let i = 0; i < recipeList.length; i++){
        if(recipeList[i].recipeType==type){
            chosenRecipe.push(recipeList[i])
        }
    }
    return chosenRecipe 
}
/*Gets the recipe using its id*/
async function getRecipeById(id){
    let recipeList = await JSON.parse(localStorage.getItem("allRecipes"))
    let chosenRecipe
    for(let i = 0; i < recipeList.length; i++){
        if(recipeList[i].recipeId==id){
            chosenRecipe = recipeList[i]
            break
        }
    }
    return chosenRecipe 
}
/*Gets all the recipes*/
async function getAllRecipes(){
    let recipeList = JSON.parse(localStorage.getItem("allRecipes"))
    return recipeList
}

async function getUserById(id){
    let userList = JSON.parse(localStorage.getItem("allUsers"))
    let chosenUser
    for(let i = 0; i <userList.length; i++){
        if(userList[i].userid==id){
            chosenUser = userList[i]
            break
        }
    }
    return chosenUser
}

function sortRecipesByRating(recipeList){
    var averageList = []
    for(var i = 0;i < recipeList.length;i++){
        var average = 0
        for(var i2 = 0;i2 <recipeList.allRating.length;i++){
            average = recipeList.allRating[i2].rating
        }
        average = average/recipeList.allRating.length
        averageList.push(average)
    }
    recipeList.sort(a,b)
}

function initializePage(id){
    (async () => {
        var chosenUser = await getUserById(id)
        var allRecipes = await getAllRecipes()
        var recipesMade = await getRecipeByUserId(allRecipes,id)
        document.getElementById("fullName").innerHTML = chosenUser.firstName+" "+chosenUser.lastName
        document.getElementById("userName").innerHTML = "@"+chosenUser.userName
        document.getElementById("submitted").innerHTML = "Submitted Recipes: "+recipesMade.length
        document.getElementById("saved").innerHTML = "Saved recipes: "+chosenUser.favoriteRecipes.length
        var profilePictures = document.querySelectorAll("[id=profilePicture]")
        for (var i = 0;i<profilePictures.length;i++){
            profilePictures[i].src=chosenUser.profilePic
        }
        showOwnRecipes(id)
     })()
}

function goToAddRecipe(){
    window.location.href = "addPage.html"
}

var userId = localStorage.getItem("User ID");
initializePage(userId)