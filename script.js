const recipes =  [
    {
"name": "Veggie Delight",
"imageSrc": "https://th.bing.com/th/id/OIP.bODTtQjSbrMEOk4w4e_JugHaEK?rs=1&pid=ImgDetMain",
"time": "30 min",
"type": "veg",
"isLiked": false,
"isComment": false,
"rating": 4.2,
"commentIcon": "fa-comment-dots"  // FontAwesome comment icon
}
,
{
    "name": "Chicken Grill",
    "imageSrc": "https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg",
    "time": "45 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.5
},
{
    "name": "Cheese Pizza",
    "imageSrc": "https://img.freepik.com/premium-photo/photo-slice-hot-italian-pizza-with-stretching-cheese-pizza-four-cheeses_875232-10675.jpg",
    "time": "40 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.1
},
{
    "name": "Steak",
    "imageSrc": "https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-14.jpg",
    "time": "60 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.7
},
{
    "name": "Grilled Salmon",
    "imageSrc": "https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-3.jpg",
    "time": "50 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.6
},
{
    "name": "Tomato Pasta",
    "imageSrc": "https://th.bing.com/th/id/OIP.dk9V-Gq8Z2Pfl-ITM1GdxAHaLH?rs=1&pid=ImgDetMain",
    "time": "35 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.0
},
{
    "name": "Vegan Salad",
    "imageSrc": "https://startrightyoga.com/wp-content/uploads/2020/10/kale-and-beet-salad-image.jpg",
    "time": "20 min",
    "type": "veg",
    "isLiked": false,
    "rating": 3.9
},
{
    "name": "Fried Chicken",
    "imageSrc": "https://facts.net/wp-content/uploads/2023/11/18-nutrition-facts-of-fried-chicken-1700719937.jpg",
    "time": "55 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.3
},
{
    "name": "Mushroom Risotto",
    "imageSrc": "https://www.platingsandpairings.com/wp-content/uploads/2018/10/mushroom-risotto-truffle-mousse-5.jpg",
    "time": "45 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.5
},
{
    "name": "Burger",
    "imageSrc": "https://www.tasteofhome.com/wp-content/uploads/2017/09/exps28800_UG143377D12_18_1b_RMS.jpg?w=1200",
    "time": "30 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.2
},
{
    "name": "Paneer Tikka",
    "imageSrc": "https://th.bing.com/th/id/OIP.-ndMbbnDa5vPzgLYrBbLMgHaE7?rs=1&pid=ImgDetMain",
    "time": "40 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.4
},
{
    "name": "BBQ Ribs",
    "imageSrc": "https://th.bing.com/th/id/OIP.Bh4Te5gCyxfKIgIpmwhebAHaE8?rs=1&pid=ImgDetMain",
    "time": "70 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.6
},
{
    "name": "Caesar Salad",
    "imageSrc": "https://th.bing.com/th/id/OIP.DkQi_TsFOUDtUDoL0pdN8gAAAA?rs=1&pid=ImgDetMain",
    "time": "25 min",
    "type": "veg",
    "isLiked": false,
    "rating": 3.8
},
{
    "name": "Fish Tacos",
    "imageSrc": "https://i0.wp.com/www.aspicyperspective.com/wp-content/uploads/2021/05/baja-fish-tacos-recipe-19.jpg?fit=1200%2C1759&ssl=1",
    "time": "35 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.3
},
{
    "name": "Chocolate Cake",
    "imageSrc": "https://th.bing.com/th/id/OIP.YdFWFv82yAZgyXCR0BVxnAHaHa?rs=1&pid=ImgDetMain",
    "time": "90 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.9
}
];



const recipeContainer = document.getElementById('recipeContainer');

function loadRecipes() {
    displayRecipes(recipes);
}

function displayRecipes(recipes) {
    recipeContainer.innerHTML = ''; // Clear existing recipes
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');
        recipeCard.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.type === 'veg' ? 'Veg' : 'Non Veg'}</p>
            <div class="details">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${recipe.rating}</span>
                </div>
                <div class="actions">
                    <button class="like-btn"><i class="fas fa-heart"></i></button>
                    <button class="comment-btn"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
            <p>${recipe.time}</p>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

// Function to filter recipes based on type
function filterRecipes(type) {
    let filteredRecipes;
    if (type === 'all') {
        filteredRecipes = recipes; // Show all recipes
    } else {
        filteredRecipes = recipes.filter(recipe => recipe.type === type); // Filter by type
    }
    displayRecipes(filteredRecipes); // Update the UI with filtered recipes
}

loadRecipes(); // Load all recipes by default

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.trim().toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchText)
        );
        displayRecipes(filteredRecipes);
    });

    // Like button functionality
    document.addEventListener('click', function(event) {
if (event.target.closest('.like-btn')) {
    const button = event.target.closest('.like-btn');
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        button.innerHTML = '<i class="fa-sharp fa-regular fa-heart"></i>'; // Unliked state
    } else {
        button.classList.add('liked');
        button.innerHTML = '<i class="fas fa-heart" style="color: red;"></i>'; // Liked state
    }
}
});


    // Rating filter functionality
    function filterRating(option) {
        let filteredRecipes;
        if (option === 'above') {
            filteredRecipes = recipes.filter(recipe => recipe.rating > 4.5);
        } else if (option === 'below') {
            filteredRecipes = recipes.filter(recipe => recipe.rating < 4.0);
        }
        displayRecipes(filteredRecipes);
    }