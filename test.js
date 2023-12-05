function getRecipesByCategory(recipes, category) {
    if (!Array.isArray(recipes) || typeof category !== "string") {
        throw new Error("Invalid input");
    }

    const filteredRecipes = recipes.filter((recipe) => recipe.category === category);
    return filteredRecipes.map((recipe) => recipe.title);
}
console.log(getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }],'Asian'))