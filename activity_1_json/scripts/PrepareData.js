
if (localStorage.getItem("allRecipes")==null){
    var recipes =[
        {
            recipeId: 1,
            recipeName: "Strawberry Milkshake",
            recipeAuthor: 1,
            recipeType:"Dessert",
            recipeDesc:"A sweet milkshake to satisfy your sweet tooth",
            recipePicture:"images/Food Pictures/milkshake.jpeg",
            recipeDuration:[
                300,
                1500
            ],
            ingredients:[
                "1/2 pound fresh strawberries, hulled and sliced, plus whole strawberries, for garnish",
                "2 tablespoons sugar",
                "1 teaspoon vanilla extract",
                "1 pint vanilla ice cream",
                "1/2 cup milk"
            ],
            steps:[
                "In a mixing bowl combine the sliced strawberries, sugar and vanilla extract and stir to combine well. Set aside and allow to macerate for at least 20 minutes and up to 1 hour.",
                "In a large mixer, place the strawberries, ice cream, and milk. Blend until smooth. Pour into ice cream parlor glasses and garnish the rim of each glass with whole strawberries. Serve immediately."
            ],
            allRatings:[
                {
                    "user":2,
                    "rating": 10
                },
                {
                    "user":3,
                    "rating":3
                }
            ]
        },
        {
            recipeId: 2,
            recipeName: "Smoked Salmon",
            recipeAuthor: 2,
            recipeType:"Fish",
            recipeDesc:"A tasty smoked salmon for the whole family",
            recipePicture:"images/Food Pictures/Salmon.jpg",
            recipeDuration:[
                29400,
                30900
            ],
            ingredients:[
                "2 pound salmon fillet",
                "2 tablespoons brown sugar",
                "2 teaspoons salt",
                "1 to 2 tablespoons liquid smoke",
                "Capers and Lemon Slices"
            ],
            steps:[
                "Place salmon, skin side down, in an 11x7-in. baking pan coated with cooking spray. Sprinkle with brown sugar, salt and pepper. Drizzle with liquid smoke. Cover and refrigerate for 4-8 hours.",
                "Drain salmon, discarding liquid. Bake, uncovered, at 350° until fish flakes easily with a fork, 35-45 minutes. Cool to room temperature. Cover and refrigerate for 8 hours or overnight. If desired, serve with capers and lemon slices."
            ],
            allRatings:[
                {
                    "user":1,
                    "rating": 8
                },
                {
                    "user":3,
                    "rating":7
                }
            ]
        },
        {
            recipeId: 3,
            recipeName: "Hatch Chile Smash Burgers",
            recipeAuthor: 3,
            recipeType: "Beef",
            recipeDesc: "A cheesy burger for when your famished",
            recipePicture:"images/Food Pictures/HatchBurgers.jpg",
            recipeDuration:[
                180,
                1200
            ],
            ingredients:[
                "1 pound 85% lean ground beef",
                "1/4 cup grated sweet onion (from 1 small onion)",
                "2 tablespoons roasted, peeled, and chopped Hatch chiles (from fresh or thawed frozen chiles)",
                "1 teaspoon kosher salt",
                "1/2 teaspoon black pepper",
                "1/4 cup canola oil, divided",
                "8 white American cheese slices",
                "4 brioche hamburger buns, split",
                "1/4 cup unsalted butter, melted",
                "6 tablespoons mayonnaise",
                "6 tablespoons Hatch Chile Salsa"
            ],
            steps:[
                "Using your hands, combine beef, onion, chiles, salt, and black pepper in a large bowl just until evenly incorporated. Shape into 8 (2 1/2-ounce) balls.",
                "Heat a large cast-iron skillet or griddle over high until smoking. Add 2 tablespoons oil. Add 4 meatballs, and immediately flatten to 1/4-inch-thickness with a sturdy, wide spatula. Cook until bottoms are crisp and deep brown, about 1 minute. Flip patties, top each with 1 cheese slice, and cook until bottoms are well charred and cheese is melted, 45 seconds to 1 minute. Remove from skillet, and cover to keep warm. Repeat with remaining 2 tablespoons oil, remaining 4 meatballs, and remaining 4 cheese slices.",
                "Preheat broiler to high with oven rack 5 to 6 inches from heat. Brush cut sides of buns with butter. Arrange buns, cut side up, on a baking sheet. Broil in preheated oven until toasted, 1 to 2 minutes. Spread each bottom bun half with 1 1/2 tablespoons mayonnaise, top with 2 patties, and spoon 1 1/2 tablespoons Hatch chile salsa over top. Cover with top bun halves, and serve immediately."
            ],
            allRatings:[
                {
                    "user":1,
                    "rating": 10
                },
                {
                    "user":2,
                    "rating":10
                }
            ]
        }
    ]
    var recipeList = JSON.stringify(recipes)
    localStorage.setItem("allRecipes",recipeList)
    
}
if (localStorage.getItem("allUsers")==null){
    var users=[
        {
            userid: 1,
            firstName: "Alice",
            lastName: "Celestine",
            userName: "alicetheredcon",
            password: "Going2Alice",
            favoriteRecipes:[2,3],
            profilePic:"images/Profile Pictures/Alice.png"
        },
    
        {
            userid: 2,
            firstName: "Gwen",
            lastName: "Isolde",
            userName: "hallowedseamstress",
            password: "ThreadedNeedle",
            favoriteRecipes:[1,3],
            profilePic:"images/Profile Pictures/Gwen.png"
        },
    
        {
            userid: 3,
            firstName: "Jack",
            lastName: "Quicksilver",
            userName: "thederailed",
            password: "Oculus",
            favoriteRecipes:[2],
            profilePic:"images/Profile Pictures/Jack.png"
        }
    ]
    var userList = JSON.stringify(users)
    localStorage.setItem("allUsers",userList)
}