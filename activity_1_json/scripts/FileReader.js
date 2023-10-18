async function getAllRecipes(){
    let recipes = await fetch("data/backup.json")
    let recipeList = JSON.parse(localStorage.getItem("allRecipes"))
    return recipeList
}

function getUserById(id){
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

function getRecipeById(id){
    let recipeList = JSON.parse(localStorage.getItem("allRecipes"))
    for(let i = 0; i < recipeList.length; i++){
        if(recipeList[i].recipeId==id){
            chosenRecipe = recipeList[i]
            break
        }
    }
    return chosenRecipe 
}