async function initializeRecipe(id){
    var recipe = await getRecipeById(id) 
    var chosenUser = await getUserById(recipe.recipeAuthor)
    document.getElementById("recImg").src = recipe.recipePicture
    document.getElementById("titleText").innerHTML = recipe.recipeName
    var type = recipe.recipeType
    document.getElementById("type").firstElementChild.nextElementSibling.innerHTML = type
    var icon = document.getElementById("type").firstElementChild
    switch (type) {
        case "Fish":
            icon.src = "images/icons/fish_icon.svg";
            break;
        case "Beef":
            icon.src = "images/icons/beef_icon.svg";
            break;
        case "Chicken":
            icon.src = "images/icons/chicken_icon.svg";
            break;
        case "Pork":
            icon.src = "images/icons/pork_icon.svg";
            break;
        case "Vegetable":
            icon.src = "images/icons/vegetable_icon.svg";
            break;
        default:
            icon.src = "images/icons/dessert_icon.svg";
            break;
    }
    document.getElementsByClassName("recipeCreator")[0].firstElementChild.src = chosenUser.profilePic
    document.getElementsByClassName("recipeCreator")[0].firstElementChild.nextElementSibling.innerHTML = chosenUser.firstName+" "+chosenUser.lastName
    document.getElementsByClassName("recipeDesc")[0].firstElementChild.innerHTML = recipe.recipeDesc
    var allTime = recipe.recipeDuration
    var timeText = "Prep Time: "+(allTime[0]/60)+" min | Cook time: "+(allTime[1]/60)+" | Total: "+((allTime[0]/60)+(allTime[1]/60))+" min"
    document.getElementsByClassName("recipeTime")[0].firstElementChild.nextElementSibling.innerHTML=timeText
    var ingredienlist = document.getElementsByClassName("ingredients")[0].firstElementChild.nextElementSibling
    for (var i=0;i<recipe.ingredients.length;i++){
        var ingredient = document.createElement("li")
        ingredient.appendChild(document.createTextNode(recipe.ingredients[i]))
        ingredienlist.appendChild(ingredient)
    }
    var steps = document.getElementsByClassName("steps")[0].firstElementChild.nextElementSibling
    for (var i=0;i<recipe.steps.length;i++){
        var step = document.createElement("li")
        step.appendChild(document.createTextNode(recipe.steps[i]))
        steps.appendChild(step)
    }
    var userFave=getUserById(localStorage.getItem("User ID")).favoriteRecipes.indexOf(Number(id))
    console.log(userFave)
    if(userFave=== -1){
        document.getElementById("hearted").src="images/Unhearted.png"
    } else{
        document.getElementById("hearted").src="images/Hearted.png"
    }
}
initializeRecipe(sessionStorage.getItem("choosenRecipe"))

function toggleFavorites(){
    var userList = JSON.parse(localStorage.getItem("allUsers"))
    var choosenRecipe = Number(sessionStorage.getItem("choosenRecipe"))
    for(var i = 0;i<userList.length;i++){
        if(userList[i].userid==localStorage.getItem("User ID")){
            var index = userList[i].favoriteRecipes.indexOf(choosenRecipe)
            if(index === -1){
                userList[i].favoriteRecipes.push(choosenRecipe)
                document.getElementById("hearted").src="images/Hearted.png"
                break
            } else{
                userList[i].favoriteRecipes.splice(index,1)
                document.getElementById("hearted").src="images/Unhearted.png"
                break
            }
        }
    }
    userList = JSON.stringify(userList)
    localStorage.setItem("allUsers",userList)
}