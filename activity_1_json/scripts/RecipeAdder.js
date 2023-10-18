let type=""
let picture

function addIngredient(){
    var ingredienlist = document.getElementById("Ingredients")
    var ingredient = document.createElement("li")
    var input = document.createElement("INPUT")
    var trash = document.createElement("img")
    trash.src = ("images/icons/delete_icon.svg")
    trash.onclick = function(){
        trash.parentElement.parentElement.remove()
    }
    input.setAttribute("type","text")
    input.setAttribute("id","ingredient")
    var div = document.createElement("div")
    div.setAttribute("class","inputObj")
    div.appendChild(input)
    div.appendChild(trash)
    ingredient.appendChild(div)
    ingredienlist.appendChild(ingredient)
}

function addStep(){
    var ingredienlist = document.getElementById("Steps")
    var ingredient = document.createElement("li")
    var input = document.createElement("INPUT")
    var trash = document.createElement("img")
    trash.src = ("images/icons/delete_icon.svg")
    trash.onclick = function(){
        trash.parentElement.parentElement.remove()
    }
    input.setAttribute("type","text")
    input.setAttribute("id","step")
    var div = document.createElement("div")
    div.setAttribute("class","inputObj")
    div.appendChild(input)
    div.appendChild(trash)
    ingredient.appendChild(div)
    ingredienlist.appendChild(ingredient)
}

function a(){
    var file = document.getElementById("myfile").files[0]
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        document.getElementById("prof").src=reader.result
        picture=reader.result
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

function changeToPork(){
    document.getElementById("choosenType").innerHTML = "Choosen Category: Pork"
    type="Pork"
}

function changeToChicken(){
    document.getElementById("choosenType").innerHTML = "Choosen Category: Chicken"
    type="Chicken"
}

function changeToDessert(){
    document.getElementById("choosenType").innerHTML = "Choosen Category: Dessert"
    type="Dessert"
}

function changeToBeef(){
    document.getElementById("choosenType").innerHTML = "Choosen Category: Beef"
    type="Beef"
}

function changeToVegetable(){
    document.getElementById("choosenType").innerHTML = "Choosen Category: Vegetable"
    type="Vegetable"
}

function changeToFish(){
    document.getElementById("choosenType").innerHTML = "Choosen Category: Fish"
    type="Fish"
}

async function saveRecipe(){
    var a = await getAllRecipes() 
    var b = a[a.length-1].recipeId+1
    var textInputList = document.querySelectorAll("input[type=text]")
    if(picture==""||type==""){
        alert("Please fill out all the necessary forms")
            return
    }
    for (var i = 0; i<textInputList.length;i++){
        if(textInputList[i].value==""){
            alert("Please fill out all the necessary forms")
            return
        }
    }
    var fullRecipe={
        recipeId: b,
        recipeName: document.getElementById("recipeName").value,
        recipeAuthor: Number(localStorage.getItem("User ID")),
        recipeType: type,
        recipeDesc: document.getElementById("recipeDesc").value,
        recipePicture: picture,
        recipeDuration:[
            document.getElementById("prepTime").value*60,
            document.getElementById("cookTime").value*60
        ],
        ingredients:[],
        steps:[],
        allRatings:[]
    }
    var ingredientsList = document.querySelectorAll("#ingredient")
    var stepsList = document.querySelectorAll("#step")
    ingredientsList.forEach(element => {
        fullRecipe.ingredients.push(element.value)
    }); 
    stepsList.forEach(element => {
        fullRecipe.steps.push(element.value)
    });
    a.push(fullRecipe)
    var jsonData = JSON.stringify(a,null,2)
    localStorage.setItem("allRecipes",jsonData)
    confirm("Your recipe has been saved")
    window.location.href = "profile.html"
}