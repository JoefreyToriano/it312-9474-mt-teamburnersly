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

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}


async function saveRecipe(){
    var a = await getAllRecipes() 
    var b = a[a.length-1].recipeId+1
    var fullRecipe={
        recipeId: b,
        recipeName: document.getElementById("recipeName").value,
        recipeAuthor: localStorage.getItem("User ID"),
        recipeType: type,
        recipeDesc: document.getElementById("recipeDesc").value,
        recipePicture: picture,
        recipeDuration:[
            document.getElementById("prepTime")*60,
            document.getElementById("cookTime")*60
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
    const fs = require('fs')
    fs.writeFileSync("data/backup.json",jsonData)
    fetch('/update-json-endpoint', {
        method: 'POST',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log('JSON file updated successfully.');
        } else {
            console.error('Failed to update JSON file.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}