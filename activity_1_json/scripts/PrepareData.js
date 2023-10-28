if (localStorage.getItem("allRecipes")==null){
    var recipes =[
            {
                recipeId: 1,
                recipeName: "Crispy Fried Chicken",
                recipeAuthor: 1,
                recipeType:"Chicken",
                recipeDesc:"Experience a burst of bold Filipino flavors with Pinoy Fried Chicken. Our crispy, golden-brown chicken is marinated in a secret blend of spices, ensuring every bite is a savory and unforgettable journey to the heart of the Philippines.",
                recipePicture:"images/food_images/fried_chicken.jpeg",
                recipeDuration:[
                    20,
                    15
                ],
                ingredients:[
                    "3 lbs. chicken cut into individual pieces",
                    "1 tablespoon salt",
                    "3 cups cooking oil",
                    "1 cup all-purpose flour",
                    "¾ cup evaporated milk",
                    "1 Knorr Chicken Cube",
                    "2 eggs",
                    "¾ cup all-purpose flour",
                    "1 teaspoon baking powder",
                    "2 teaspoons garlic powder",
                    "½ teaspoon salt",
                    "¼ teaspoon ground black pepper"
                ],
                steps:[
                    "Rub salt all over the chicken. Let it stay for 15 minutes.",
                    "Heat the oil in a cooking pot.",
                    "Prepare the batter. Start by pressing a fork on the chicken cube until it is completely squashed. Combine it with warm milk. Stir until well blended. Set aside.",
                    "Combine flour, baking powder, garlic powder, salt, and ground black pepper. Mix well using a fork or a wire whisk. Set aside.",
                    "Beat the eggs in a large mixing bowl. Add the milk mixture. Continue to beat until all the ingredients are all incorporated. Add half of flour mixture. Whisk. Add the remaining half and whisk until the texture of the batter becomes smooth.",
                    "Dredge the chicken in flour and then dip in batter. Roll it again in flour until completely covered. Fry in medium heat for 7 minutes per side.",
                    "Remove from the pot and put on a plate lined with paper towels. This will absorb the oil.",
                    "Serve with ketchup or gravy.",
                    "Share and enjoy!"
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
                recipeName: "Kakaibang Filipino Chicken Adobo",
                recipeAuthor: 2,
                recipeType:"Chicken",
                recipeDesc:"Indulge in a culinary adventure with Pinoy Kakaibang Filipino Chicken Adobo infused with the exotic richness of yogurt. This unique fusion elevates the beloved Filipino classic, creating a harmonious blend of savory, tangy flavors that will tantalize your taste buds and leave you craving for more.",
                recipePicture:"images/food_images/kakaibang_chicken_adobo.jpeg",
                recipeDuraion: [
                    20,
                    5
                ],
                ingredients:[
                    "2 lbs. chicken cut into serving pieces",
                    "3 ounces chicken liver",
                    "½ Knorr Chicken Cube",
                    "1 ½ cups lemon-lime soda",
                    "6 eggs boiled (optional)",
                    "3 tablespoons white vinegar",
                    "¼ cup soy sauce",
                    "1 head garlic crushed",
                    "3 bay leaves",
                    "2 teaspoons peppercorn cracked",
                    "2 tablespoons cornstarch",
                    "1 cup water",
                    "1 bunch green onions",
                    "1 ½ teaspoons butter",
                    "¼ cup cooking oil",
                    "2 cups plain yogurt",
                    "½ Knorr Chicken Cube"
                ],
                steps:[
                    "Combine the marinade ingredients in a large bowl. Mix well. Add the chicken pieces and coat them with the marinade mixture. Cover the bowl and put it inside the refrigerator. Let it marinate for at least 3 hours.",
                    "Heat cooking oil in a pan. Fry both sides of the chicken liver until they brown. Remove from the pan and set aside.",
                    "Using the remaining oil, fry the marinated chicken for 1 minute per side. Remove from the pan.",
                    "Melt the butter with the remaining oil. Add crushed garlic. Cook until it starts to brown.",
                    "Put the chicken back into the pan. Add soy sauce, vinegar, lemon-lime soda, and water. Let it come to a boil.",
                    "Add ½ Knorr Chicken Cube, cracked peppercorn, and bay leaves. Cover the pot and reduce the heat to a low setting. Cook for 20 to 25 minutes.",
                    "Add the fried chicken livers back into the pan. Stir.",
                    "Combine cornstarch with ¼ cup water to make a slurry. Mix well. Pour into the cooking pot and stir immediately. Add boiled eggs. Continue cooking until the sauce thickens.",
                    "Arrange on a serving plate and garnish with chopped green onions.",
                    "Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":4,
                        "rating": 10
                    },
                    {
                        "user":5,
                        "rating":9
                    }
                ]
            },
        
            {
                recipeId: 3,
                recipeName: "Chicken Tinola",
                recipeAuthor: 2,
                recipeType: "Chicken",
                recipeDesc: "Indulge in the extraordinary flavors of Pinoy Kakaibang Filipino Chicken Tinola, a tantalizing twist on a classic Filipino favorite. With its unique blend of aromatic herbs, succulent chicken, and the comforting warmth of ginger, this dish takes your taste buds on a delightful journey through the heart of Filipino cuisine like never before.",
                recipePicture:"images/food_images/chicken-tinola.jpeg",
                recipeDuration:[
                    15,
                    60
                ],
                ingredients:[
                    "1 whole chicken cut into serving pieces",
                    "36 ouces rice washing",
                    "1/2 green papaya cut into wedges",
                    "1 tbsp garlic minced",
                    "1 onion chopped",
                    "1 thumb ginger cut into strips",
                    "2 tbsp fish sauce",
                    "1 1/2 cups hot pepper leaves"
                ],
                steps:[
                    "Sauté the garlic, onion, and ginger",
                    "Put-in the chicken and cook until the color turns light brown",
                    "Add the fish sauce and mix well",
                    "Pour-in the rice washing and bring to a boil. Simmer for 45 minutes.",
                    "Add the green papaya wedges and simmer for 5 minutes",
                    "Add the hot pepper leaves",
                    "Add salt and pepper to taste",
                    "Serve hot. Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":3,
                        "rating": 9
                    },
                    {
                        "user":5,
                        "rating":8
                    }
                ]
            },
        
            {
                recipeId: 4,
                recipeName: "Pork Binagoongan sa Gata",
                recipeAuthor: 5,
                recipeType: "Pork",
                recipeDesc: "Indulge in the rich and flavorful world of Filipino cuisine with our Pinoy Kakaibang Pork Binagoongan sa Gata. Succulent pork is lovingly simmered in a luscious coconut milk sauce, creating a harmonious fusion of sweet, savory, and creamy that will transport your taste buds straight to the Philippines. This dish is a delightful celebration of authentic Filipino flavors that you won't be able to resist.",
                recipePicture:"images/food_images/pork-binagoongan.jpeg",
                recipeDuration:[
                    15,
                    80
                ],
                ingredients:[
                    "3 lbs. pork belly cubed",
                    "40 gram Knorr Ginataang Gulay Recipe Mix",
                    "4 tablespoons shrimp paste",
                    "3 cups water",
                    "1 eggplant sliced",
                    "1 tomato chopped",
                    "1 onion minced",
                    "5 cloves garlic minced",
                    "2 tablespoons white vinegar",
                    "1 teaspoon sugar",
                    "3 long green chili peppers sliced",
                    "5 tablespoons cooking oil",
                    "Fish sauce and ground black pepper to taste"
                ],
                steps:[
                    "Heat a pan and then sear the pork belly. Remove the belly from the pan and set it aside.",
                    "Add 2 tablespoons of cooking oil in the same pan. Fry the eggplants for 2 minutes per side. Remove and set aside.",
                    "Heat the remaining oil in a pan. Sauté garlic, onion, and tomato. Add the shrimp paste (bagoong alamang) and cook it for 2 minutes.",
                    "Add the seared pork back once the onion softens. Cook for 1 minute.",
                    "Pour water and let the mixture boil. Adjust the heat to a low setting. Cook for 35 minutes.",
                    "Combine Knorr Gintaang Gulay Mix with 1 cup water. Pour the mixture into the pot. Add vinegar. Cover and continue cooking until the pork becomes tender.",
                    "Add the fried eggplants, long green peppers, along with a teaspoon of sugar. Cook for 2 minutes.",
                    "Season with fish sauce and ground black pepper. Serve with rice. Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":3,
                        "rating": 9
                    },
                    {
                        "user":5,
                        "rating":8
                    }
                ]
            },
        
            {
                recipeId: 5,
                recipeName: "Crispy Pata Kare Kare",
                recipeAuthor: 1,
                recipeType: "Pork",
                recipeDesc: "Savor the extraordinary harmony of textures and flavors with Crispy Pata Kare-Kare. This remarkable dish unites the delightful crunch of deep-fried pork knuckle with the luscious, nutty essence of Kare-Kare sauce, promising a Filipino culinary experience that's simply irresistible.",
                recipePicture:"images/food_images/crispy_pata_kare_kare.jpeg",
                recipeDuration:[
                    15,
                    80
                ],
                ingredients:[
                    "3 lbs. pork belly cubed",
                    "40 grams Knorr Ginataang Gulay Recipe Mix",
                    "4 tablespoons shrimp paste",
                    "3 cups water",
                    "1 eggplant sliced",
                    "1 tomato chopped",
                    "1 onion minced",
                    "5 cloves garlic minced",
                    "2 tablespoons white vinegar",
                    "1 teaspoon sugar",
                    "3 long green chili peppers sliced",
                    "5 tablespoons cooking oil",
                    "Fish sauce and ground black pepper to taste"
                ],
                steps:[
                    "Combine all the boiling ingredients in a large cooking pot. Add pork hock. Boil for 1 hour.",
                    "Remove the pork hock from the cooking pot. Let it cool down and then rub salt all over. Air dry for 30 minutes.",
                    "Heat oil in a pan. Sauté garlic and onion. Once the onion softens, add the peanut paste. Stir and cook for 1 minute.",
                    "Pour water and then stir until the mixture becomes smooth. Let the liquid boil.", 
                    "Add Knorr Pork Cube and annatto powder. Cover the pot. Reduce the heat to a simmer. Continue cooking until your desired consistency is achieved.", 
                    "Season with salt and ground black pepper. Set aside.",
                    "Heat oil in a wide and deep pot. Fry the pork hock until the bottom side turns golden brown and crispy. Turn it over and do the same thing on the opposite side.", 
                    "Remove from the pot. Let it cool down. Debone the pork hock. Set aside.",
                    "Arrange the vegetable ingredients on a steamer. Steam for 3 to 5 minutes. Set aside.",
                    "Assemble your crispy pata kare-kare by pouring half of the sauce on a serving bowl. Arrange the steamed vegetables all around.", 
                    "Top with crispy pata. Distribute the remaining sauce by pouring onto the bowl. Serve with shrimp paste (bagoong alamang) as a condiment. Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":1,
                        "rating": 9
                    },
                    {
                        "user":2,
                        "rating":10
                    }
                ]
            },
        
            {
                recipeId: 6,
                recipeName: "Pork Sinigang",
                recipeAuthor: 3,
                recipeType: "Pork",
                recipeDesc: "Indulge in the rich and tangy flavors of Pork Sinigang, a beloved Filipino stew that tantalizes taste buds with succulent pork, crisp vegetables, and a zesty tamarind broth. Its delightful blend of savory and sour notes promises a comforting and invigorating dining experience you won't want to miss.",
                recipePicture:"images/food_images/pork_sinigang.jpeg",
                recipeDuration:[
                        15,
                        90
                    ],
                ingredients:[
                        "3 lbs. pork belly cubed",
                        "40 grams Knorr Ginataang Gulay Recipe Mix",
                        "4 tablespoons shrimp paste",
                        "3 cups water",
                        "1 eggplant sliced",
                        "1 tomato chopped",
                        "1 onion minced",
                        "5 cloves garlic minced",
                        "2 tablespoons white vinegar",
                        "1 teaspoon sugar",
                        "3 long green chili peppers sliced",
                        "5 tablespoons cooking oil",
                        "Fish sauce and ground black pepper to taste"
                    ],
                steps:[
                        "Heat the pot and put-in the cooking oil.",
                        "Sauté the onion until its layers separate from each other.",
                        "Add the pork belly and cook until the outer part turns light brown.",
                        "Put-in the fish sauce and mix with the ingredients.",
                        "Pour the water and bring to a boil.",
                        "Add the taro and tomatoes, then simmer for 40 minutes or until pork is tender.",
                        "Put-in the sinigang mix and chili.",
                        "Add the string beans (and other vegetables if there are any) and simmer for 5 to 8 minutes.",
                        "Put-in the spinach, turn off the heat, and cover the pot. Let the spinach cook using the remaining heat in the pot.",
                        "Serve hot. Share and enjoy!"
                    ],
                allRatings:[
                        {
                            "user":3,
                            "rating": 6
                        },
                        {
                            "user":2,
                            "rating":8
                        }
                ]
            },
        
            {
                recipeId: 7,
                recipeName: "Chicken Sisig",
                recipeAuthor: 3,
                recipeType: "Chicken",
                recipeDesc: "Experience the tantalizing flavors of Chicken Sisig, a sizzling Filipino specialty that captivates your palate with its exquisite fusion of succulent, marinated chicken, zesty calamansi, and crunchy onions. Served piping hot, this delightful dish presents a harmonious medley of savory and tangy notes, providing a culinary adventure that's truly unforgettable.",
                recipePicture: "images/food_images/chicken-sisig.jpeg",
                recipeDuration: [
                    20, 
                    40
                ],
                ingredients: [
                    "2 lbs. boneless chicken thighs, finely chopped",
                    "1 cup chicken liver, minced",
                    "1 large red onion, minced",
                    "4 cloves garlic, minced",
                    "5-7 pieces green chili peppers, minced",
                    "1/4 cup mayonnaise",
                    "1 tablespoon soy sauce",
                    "1 tablespoon oyster sauce",
                    "1 tablespoon calamansi juice (or lemon juice)",
                    "Salt and pepper to taste",
                    "3 tablespoons cooking oil"
                ],
                steps: [
                    "Heat a sizzling plate or a cast-iron skillet over medium-high heat.",
                    "Add cooking oil to the hot plate or skillet.",
                    "Saute the garlic and onions until the onions are soft and translucent.",
                    "Add the minced chicken liver and cook until it turns brown.",
                    "Put in the finely chopped chicken thighs and cook until they are browned and fully cooked.",
                    "Add the minced green chili peppers and saute for a few minutes until they're cooked and fragrant.",
                    "Pour in the mayonnaise, soy sauce, oyster sauce, and calamansi juice. Mix well and cook for a few more minutes until the sauce thickens.",
                    "Season with salt and pepper to taste.",
                    "Once the sisig is cooked and sizzling, remove it from the heat and transfer it to a serving plate.",
                    "Serve immediately, garnished with extra green chili peppers if desired.",
                    "Enjoy your sizzling Chicken Sisig!"
                ],
                allRatings: [
                    {
                        "user": 4,
                        "rating": 10
                    },
                    {
                        "user": 5,
                        "rating": 9
                    }
                ]
            },
        
            {
                recipeId: 8,
                recipeName: "Biko",
                recipeAuthor: 3,
                recipeType: "Dessert",
                recipeDesc: "Pinoy Biko is a delectable Filipino dessert that captivates the senses with its luscious blend of sticky rice infused with sweet coconut milk and crowned with a caramelized coconut topping. This irresistible treat is a harmonious marriage of rich, creamy flavors and chewy, glutinous textures, making it a must-try delicacy that promises to transport your taste buds to the heart of Filipino culinary delight.",
                recipePicture:"images/food_images/biko.jpeg",
                recipeDuration:[
                    10,
                    35
                ],
                ingredients:[
                    "2 cups Glutinous Rice (Sticky Rice or Malagkit)",
                    "1 1/2 cups Water",
                    "2 cups Brown Sugar",
                    "4 cups Coconut Milk",
                    "1/2 tsp Salt"
                ],
                steps:[
                    "Combine the sticky rice and water in a rice cooker and cook until the rice is ready (we intentionally combined a lesser amount of water than the usual so that the rice will not be fully cooked).",
                    "While the rice is cooking, combine the coconut milk with brown sugar and salt in a separate pot and cook on low heat until the texture becomes thick. Stir constantly.",
                    "Once the rice is cooked and the coconut milk-sugar mixture is thick enough, add the cooked rice to the coconut milk and sugar mixture, then mix well. Continue cooking until all the liquid evaporates (but do not overcook).",
                    "Scoop the cooked biko and place it on a serving plate, then flatten the surface.",
                    "Share and Enjoy!"
                ],
                allRatings:[
                    {
                        "user":4,
                        "rating": 10
                    }
                ]
            },
        
            {
                recipeId: 9,
                recipeName: "Maja Blanca",
                recipeAuthor: 3,
                recipeType: "Dessert",
                recipeDesc: "Indulge in the delightful world of Pinoy Maja Blanca, a creamy Filipino dessert that captivates with its luscious coconut flavor and silky-smooth texture. This sweet and satisfying treat, topped with golden latik, embodies the essence of Filipino culinary creativity, making it a beloved favorite for all to savor.",
                recipePicture:"images/food_images/maja_blanca.jpeg",
                recipeDuration:[
                    10,
                    35
                ],
                ingredients:[
                    "4 cups coconut milk",
                    "3/4 cup ornstarch",
                    "14 ounces condensed milk",
                    "3/4 cup fresh milk",
                    "3/4 cup granulated sugar",
                    "15 ounces whole sweet kernel corn",
                    "5 tbsp toasted grated coconut"
                ],
                steps:[
                    "Pour the coconut milk in a cooking pot and bring to a boil.",
                    "Add the sugar, condensed milk, and whole sweet kernel corn then stir until all the ingredients are evenly distributed.",
                    "Simmer for 8 minutes.",
                    "Combine the milk and cornstarch then whisk until the cornstarch is diluted.",
                    "Pour the fresh milk and cornstarch mixture into the cooking pot and stir thoroughly.",
                    "Allow to cook while stirring until the mixture reaches your desired thickness.",
                    "Pour the mixture in a serving tray then arrange and flatten the top using a flat tool such as a wooden spatula.",
                    "Allow to cool down then refrigerate for at least 1 hour.",
                    "Garnish with toasted grated coconut (or latik if available).",
                    "Serve cold. Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":1,
                        "rating": 9
                    },
                    {
                        "user":5,
                        "rating": 10
                    }
                ]
            },
        
            {
                recipeId: 10,
                recipeName: "Creamy Beef with Mushroom",
                recipeAuthor: 1,
                recipeType: "Beef",
                recipeDesc: "Indulge in the rich and savory delight of Pinoy Creamy Beef with Mushroom, where tender strips of beef are simmered to perfection in a velvety, mushroom-infused cream sauce. This Filipino classic will transport your taste buds to a realm of creamy indulgence and hearty satisfaction that's simply irresistible.",
                recipePicture:"images/food_images/creamy_beef_mushroom.jpeg",
                recipeDuration:[
                    10,
                    30
                ],
                ingredients:[
                    "2 lbs Beef Sirloin (sliced thinly)",
                    "8 ounces Button Mushrooms",
                    "62 grams Knorr Cream of Mushroom Soup",
                    "1 head Garlic (sliced)",
                    "1 Onion (diced)",
                    "2 cups Watr",
                    "3 tablespoons Butter",
                    "1 tablespoon Cooking Oil",
                    "1 tablespoon Parsley (chopped)",
                    "Salt and Ground Black Pepper (to taste)"
                ],
                steps:[
                    "Melt butter in a pan. Add cooking oil.",
                    "Sauté garlic until it browns. Add onion and cook until it softens.",
                    "Add the beef. Cook while stirring until the sides turn brown.",
                    "Pour 1 cup of water. Cover the pan. Adjust to a simmer and continue cooking for 35 minutes.",
                    "Add button mushrooms. Stir.",
                    "Combine 1 cup of water and Knorr Cream of Mushroom in a bowl. Mix well.",
                    "Pour the mixture into the pan. Let it boil. Continue cooking uncovered for 10 to 15 minutes using low heat setting.",
                    "Season with salt and ground black pepper.",
                    "Top with parsley. Serve warm with rice.",
                    "Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user": 3,
                        "rating": 8
                    },
                    {
                        "user":2,
                        "rating":9
                    }
                ]
            },
        
            {
                recipeId: 11,
                recipeName: "Beef Steak",
                recipeAuthor: 3,
                recipeType: "Beef",
                recipeDesc: "Pinoy Beef Steak, also known as Bistek Tagalog, is a mouthwatering Filipino dish that marries succulent slices of beef, soaked in a zesty soy sauce and calamansi marinade, with the delightful tang of onions and a hint of garlic. This flavorful symphony of tender meat and vibrant seasonings creates a dish that's not just a Filipino favorite but a global sensation, promising a tantalizing taste of the Philippines with every delicious bite.",
                recipePicture:"images/food_images/beef_steak.jpeg",
                recipeDuration:[
                    10,
                    60
                ],
                ingredients:[
                    "2 lbs of Beef",
                    "1 Knorr Beef Cube",
                    "2 Onions",
                    "4 cloves  Garlic",
                    "1 teaspoon of Peppercorns",
                    "2 teaspoons of Cornstarch",
                    "1 ½ teaspoons of Brown Sugar",
                    "6 tablespoons of Soy Sauce",
                    "½ Lemon (juice from ½ lemon)",
                    "2 ½ cups of Water",
                    "3 tablespoons of Cooking Oil"
                ],
                steps:[
                    "Combine beef, soy sauce, juice from ½ lemon, and ½ teaspoon cracked peppercorn in a bowl. Mix well. Refrigerate for at least 1 hour.",
                    "Heat cooking oil in a pan. Fry each side of the marinated beef for 1 minute. Remove and set aside.",
                    "Using the remaining oil (you can add more if needed), sauté half of the onion and add the garlic.",
                    "Put the beef in the pan once the onion softens. Sauté for 1 minute.",
                    "Pour 1 ½ cups of water into the pan. Cover and let the liquid boil.",
                    "Add Knorr Beef Cube. Cover the pan and then adjust the heat to a low setting. Cook for up to 40 minutes. Note: add more water as needed.",
                    "Add the remaining onion and season with cracked peppercorn and add brown sugar.",
                    "Make the sauce thicker by pouring-in the slurry. Do this by mixing cornstarch with 3 tablespoons of water.",
                    "Once the sauce gets thick enough, you may turn the heat off and transfer your Filipino Style Beef Steak to a serving bowl.",
                    "Serve with warm rice. Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":1,
                        "rating": 7
                    },
                    {
                        "user":2,
                        "rating":8
                    }
                ]
            },
        
            {
                recipeId: 12,
                recipeName: "Beef Caldereta",
                recipeAuthor: 4,
                recipeType: "Beef",
                recipeDesc: "Indulge in the irresistible allure of Beef Caldereta, a symphony of flavors where succulent beef harmonizes with rich tomato sauce, aromatic spices, and vibrant bell peppers. This Filipino culinary masterpiece will tantalize your taste buds, leaving you craving for more with every exquisite bite.",
                recipePicture:"images/food_images/beef_caldereta.jpeg",
                recipeDuration:[
                        20,
                        60
                    ],
                ingredients:[
                        "1 kg beef, cubed (usually from the chuck or shoulder)",
                        "2 large potatoes, peeled and cubed",
                        "2 red bell peppers, sliced into strips",
                        "1 green bell pepper, sliced into strips",
                        "1 cup green olives",
                        "3 cloves garlic, minced",
                        "1 onion, chopped",
                        "2 cups tomato sauce",
                        "1 cup liver spread (or liver pâté)",
                        "2 cups beef broth",
                        "3-4 tablespoons cooking oil",
                        "Salt and pepper to taste",
                        "Chili peppers (optional, for added heat)",
                        "1 bay leaf",
                        "1 teaspoon paprika",
                        "1 teaspoon ground black pepper",
                        "Fish sauce or soy sauce (for marinating)",
                        "1-2 tablespoons sugar (optional, for sweetness)"
                    ],
                steps:[
                        "Marinate the beef in fish sauce or soy sauce, and then set it aside for at least 30 minutes.",
                        "In a large pot, heat the cooking oil over medium heat. Sauté garlic and onions until fragrant.",
                        "Add the marinated beef and cook until browned on all sides.",
                        "Pour in the tomato sauce, liver spread, and beef broth. Stir to combine.",
                        "Add the bay leaf, paprika, and ground black pepper. Season with salt and pepper to taste.",
                        "Simmer on low heat for 1.5 to 2 hours or until the beef becomes tender. Add more broth if needed.",
                        "Add the potatoes, olives, and bell peppers. Cook until the vegetables are tender.",
                        "Adjust the seasoning. You can add sugar for a touch of sweetness if desired.",
                        "If you want it spicy, you can add chili peppers for some heat.",
                        "Serve hot with steamed rice. Enjoy your delicious Beef Caldereta!"
                    ],
                allRatings:[
                        {
                            "user":5,
                            "rating": 9
                        },
                        {
                            "user":2,
                            "rating":8
                        }
                ]
            },
        
            {
                recipeId: 13,
                recipeName: "Ginisang Monggo",
                recipeAuthor: 3,
                recipeType: "Vegetable",
                recipeDesc: "Ginisang Monggo, a beloved Filipino dish, is a flavorful and nutritious mung bean stew that tantalizes the taste buds with its perfect blend of sautéed garlic, onions, and tomatoes. With its rich, comforting aroma and hearty, protein-packed ingredients, Ginisang Monggo is not just a meal; it's a delightful taste of Filipino tradition that will leave you craving more.",
                recipePicture:"images/food_images/ginisang_monggo.jpeg",
                recipeDuration:[
                            10,
                            80
                        ],
                ingredients:[
                            "1 1/2 cups Mung Beans",
                            "1 tbsp Garlic",
                            "1/2 lb Pork (thinly sliced)",
                            "2 cups Spinach (or alugbati)",
                            "1 piece Tomato (chopped)",
                            "1 piece Onion (chopped)",
                            "8 pieces Shrimp (optional)",
                            "2 tablespoons Fish Sauce",
                            "24 ounces Water (for boiling)",
                            "1 piece Knorr Beef Cube (for flavoring)",
                            "1/2 cup Crushed Pork Rind (Chicharon)",
                            "1/4 teaspoon Ground Black Pepper"
                        ],
                steps:[
                        "In a pan, put-in the water and bring it to a boil",
                        "Put-in the Mung beans and simmer until they become soft (about 35 to 50 minutes).",
                        "On a separate pan, sauté the garlic, onion, and tomato.",
                        "Add the pork. Cook for 5 minutes.",
                        "Put-in the beef cube and fish sauce. Simmer for 10 minutes or until the meat is tender. Note: If necessary, you may add water to help make the meat tender, but make sure to add more time to simmer.",
                        "Add the shrimp. Stir and then cook for 2 minutes.",
                        "Pour the cooked Mung beans. Stir and then simmer for 10 minutes.",
                        "Add the spinach and pork rinds (chicharon).",
                        "Sprinkle the ground black pepper.",
                        "Serve hot. Share and Enjoy!"
                    ],
                allRatings:[
                        {
                            "user":4,
                            "rating": 8
                        },
                        {
                            "user":2,
                            "rating":7
                        }
                    ]
            },
        
            {
                recipeId: 14,
                recipeName: "Chop Suey",
                recipeAuthor: 3,
                recipeType: "Vegetable",
                recipeDesc: "Pinoy Chop Suey is a delightful Filipino culinary masterpiece that harmoniously blends vibrant, crisp vegetables and succulent meats, expertly sautéed in a savory sauce. This beloved dish not only tantalizes the taste buds with its rich flavors but also captures the essence of Filipino cuisine's diverse and colorful essence, making it a must-try for anyone seeking a delicious and multicultural dining experience.",
                recipePicture:"images/food_images/chop-suey.jpeg",
                recipeDuration:[
                    10,
                    40
                ],
                ingredients: [
                    "7 pieces of cleaned and deveined Shrimp",
                    "3 ounces of sliced Pork",
                    "3 ounces of sliced Chicken Breast",
                    "1 ½ cups of Cauliflower Florets",
                    "1 piece of Carrot (sliced crosswise into thin pieces)",
                    "15 pieces of Snow Peas",
                    "8 pieces of Baby Corn",
                    "1 piece of Red Bell Pepper (sliced into squares)",
                    "1 piece of Green Bell Pepper (sliced into squares)",
                    "1 ½ cups of chopped Cabbage",
                    "12 pieces of boiled Quail Eggs",
                    "1 piece of Yellow Onion (sliced)",
                    "4 cloves of crushed Garlic",
                    "¼ cup of Soy Sauce",
                    "1 ½ tablespoons of Oyster Sauce",
                    "¾ cup of Water",
                    "1 tablespoon of Cornstarch (diluted in ½ cup of water)",
                    "¼ teaspoon of Ground Black Pepper",
                    "3 tablespoons of Cooking Oil"
                ],
                steps:[
                    "Heat oil in a wok or pan.",
                    "Pan fry the shrimp for 1 minute per side. Remove from the wok. Set aside.",
                    "Saute onion. Add garlic and continue to saute until the onion becomes soft.",
                    "Add pork and chicken. Stir fry until light brown.",
                    "Add soy sauce and oyster sauce. Stir.",
                    "Pour water. Let boil. Cover and cook in medium heat for 15 minutes.",
                    "Add cauliflower, carrots, bell peppers, snow peas, and young corn. Stir.",
                    "Add cabbage. Toss. Cover and cook for 5 to 7 minutes.",
                    "Put the pan-fried shrimp into the pot and add ground black pepper.",
                    "Add the boiled quail eggs and cornstarch diluted in water. Toss.",
                    "Transfer to a serving plate. Serve.",
                    "Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":4,
                        "rating": 10
                    },
                    {
                        "user":5,
                        "rating":9
                    }
                ]
            },
            {
                recipeId: 15,
                recipeName: "Pinangat na Galunggong sa Kamias",
                recipeAuthor: 5,
                recipeType: "Fish",
                recipeDesc: "Indulge in the mouthwatering flavors of Pinangat na Galunggong sa Kamias, a Filipino dish that perfectly balances the tanginess of kamias (bilimbi fruit) with the savory goodness of galunggong (round scad). This delightful combination creates a harmonious blend of sweet and sour, making it a must-try delicacy for those seeking a truly authentic Filipino culinary experience.",
                recipePicture:"images/food_images/pinangat_na_isda.jpeg",
                recipeDuration:[
                    15,
                    30
                ],
                ingredients: [
                    "1 lb Galungong Fish (cleaned)",
                    "20 pieces Kamias (Bilimbi, dried)",
                    "2 pieces Tomato (sliced)",
                    "1 piece Onion (sliced)",
                    "5 cloves Garlic (chopped)",
                    "2 thumbs Ginger (Julienne)",
                    "2 pieces Green Pepper (sliced)",
                    "3 tablespoons Pork Fat (cubed)",
                    "1 1/4 cups Water",
                    "Salt and Ground Black Pepper (to taste)"
                ], 
                steps:[
                    "Rub salt all over the fish. Let it stay for 5 minutes.",
                    "Distribute the pork fat in a cooking pot. Add kamias, onion, tomato, ginger, and long green pepper.",
                    "Arrange the fish over the ingredients and season with ground black pepper.",
                    "Pour water into the pot. Cover it and turn the stove on. Let the water boil. Adjust heat to low. Continue cooking for 15 minutes.",
                    "Adjust the seasoning by adding salt if needed. Continue cooking without covering the pot until the sauce reduces to half.",
                    "Transfer to a serving plate. Serve with warm rice. Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":2,
                        "rating": 9
                    },
                    {
                        "user":3,
                        "rating":8
                    }
                ]
            },
            {
                recipeId: 16,
                recipeName: "Paksiw na Bangus",
                recipeAuthor: 3,
                recipeType: "Fish",
                recipeDesc: "Paksiw na Bangus is a Filipino culinary delight that tantalizes the taste buds with its perfect harmony of sourness and savory flavors. Dive into a world of delectable tangy sensations as this dish offers a delightful twist on traditional milkfish, making it a must-try for those seeking a unique and satisfying culinary experience.",
                recipePicture:"images/food_images/paksiw_na_bangus.jpeg",
                recipeDuration:[
                    15,
                    30
                ],
                ingredients:[
                    "1 1/2 lbs. Milkfish (cleaned and sliced crosswise into serving pieces",
                    "3 thumbs of crushed Ginger",
                    "5 cloves of crushed Garlic",
                    "1/2 cup of White vinegar",
                    "1 cup of Water",
                    "1 piece of sliced Onion",
                    "1 piece of chopped Chinese eggplant",
                    "5 pieces of Okra",
                    "2 pieces of Long green pepper",
                    "1 teaspoon of Whole peppercorn",
                    "Salt (to taste"
                ],
                steps:[
                    "Arrange ginger, garlic, okra, onion, long green pepper, peppercorn, and eggplant in a pot.",
                    "Place the milkfish slices on top.",
                    "Pour water and vinegar into the pot. Apply heat and let it boil. Cover and continue to cook on low to medium heat for 15 minutes.",
                    "Add salt to taste.",
                    "Transfer to a serving plate and serve.",
                    "Share and enjoy!"
                ],
                allRatings:[
                    {
                        "user":4,
                        "rating": 10
                    },
                    {
                        "user":5,
                        "rating":9
                    }
                ]
            }, 
        
            {
                recipeId: 17,
                recipeName: "Fried Tilapia",
                recipeAuthor: 5,
                recipeType: "Fish",
                recipeDesc:  "Indulge in the mouthwatering experience of Pinoy Fried Tilapia, where every bite offers a perfect blend of crispy goodness and rich Filipino flavors. A must-try dish that will tantalize your taste buds.",
                recipePicture:"images/food_images/fried_tilapia.jpeg",
                recipeDuration:[
                    15,
                    15
                ],
                ingredients:[
                    "2 Fresh Tilapia Fish (whole)",
                    "3 cups Cooking Oil",
                    "1 teaspoon Salt",
                    "1/2 teaspoon Ground Black Pepper",
                    "1 teaspoon Garlic Powder",
                    "1 cup All-Purpose Flour"
                ],
                steps:[
                    "Begin by cleaning the 2 Fresh Tilapia Fish thoroughly, removing scales and innards. Rinse them and pat dry with paper towels.",
                    "In a bowl, combine 1 teaspoon Salt, 1/2 teaspoon Ground Black Pepper, and 1 teaspoon Garlic Powder. Mix these seasonings well." ,
                    "Rub the seasoning mixture evenly over both sides of the 2 Fresh Tilapia Fish, ensuring they're well coated. Allow them to rest for about 15 minutes.",
                    "Heat 3 cups of Cooking Oil in a deep frying pan or skillet over medium-high heat." ,
                    "While the oil is heating, place 1 cup of All-Purpose Flour in a shallow dish or plate.",
                    "Gently dredge each seasoned tilapia in the flour, ensuring they are coated evenly. Shake off any excess flour.",
                    "Once the oil is hot (around 350-375°F or 175-190°C), carefully place the coated tilapia into the pan. You may need to do this one at a time or in batches to avoid overcrowding.",
                    "Fry the tilapia for about 5-7 minutes on each side or until they are golden brown and crispy. Cooking times may vary based on the size of the fish.",
                    "Once done, remove the fried tilapia from the oil and place them on a plate lined with paper towels to absorb any excess oil.",
                    "Serve your Crispy Pinoy Fried Tilapia hot and enjoy!"
                ],
                allRatings:[
                    {
                        "user":4,
                        "rating": 10
                    },
                    {
                        "user":1,
                        "rating":9
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
            profilePic:"images/profile_images/alice.jpeg"
        },
    
        {
            userid: 2,
            firstName: "Gwen",
            lastName: "Isolde",
            userName: "hallowedseamstress",
            password: "ThreadedNeedle",
            favoriteRecipes:[1,3],
            profilePic:"images/profile_images/gwen.jpeg"
        },
    
        {
            userid: 3,
            firstName: "Megumi",
            lastName: "Fushiguro",
            userName: "tenshadows",
            password: "shikigami",
            favoriteRecipes:[2,10,13],
            profilePic:"images/profile_images/fushiguro.jpeg"
        },

        {
            userid: 4,
            firstName: "Toge",
            lastName: "Inumaki",
            userName: "shuke",
            password: "salmon",
            favoriteRecipes:[6,9,15],
            profilePic:"images/profile_images/inumaki.jpeg"
        },

        {
            userid: 5,
            firstName: "Satoru",
            lastName: "Goju",
            userName: "thestrongest",
            password: "infinity",
            favoriteRecipes:[8,2,16],
            profilePic:"images/profile_images/goju.jpeg"
        }
    ]
    var userList = JSON.stringify(users)
    localStorage.setItem("allUsers",userList)
}