const { expect } = require("chai");

const recipeSelection = {
  isTypeSuitable(type, dietaryRestriction) {
    if (typeof type !== "string" || typeof dietaryRestriction !== "string") {
      throw new Error("Invalid input");
    }
    if (dietaryRestriction === "Vegetarian" && type === "Meat") {
      return "This recipe is not suitable for vegetarians";
    } else if (dietaryRestriction === "Vegan" && (type === "Meat" || type === "Dairy")) {
      return "This recipe is not suitable for vegans";
    } else {
      return "This recipe is suitable for your dietary restriction";
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let remainingBudget = budget - price;

    if (remainingBudget < 0) {
      return "You don't have enough budget to afford this recipe";
    } else {
      return `Recipe ingredients bought. You have ${remainingBudget}$ left`;
    }
  },
  getRecipesByCategory(recipes, category) {
    if (!Array.isArray(recipes) || typeof category !== "string") {
      throw new Error("Invalid input");
    }

    const filteredRecipes = recipes.filter((recipe) => recipe.category === category);
    return filteredRecipes.map((recipe) => recipe.title);
  },
};


module.exports = recipeSelection;

describe('Main tests', () => {
  it('Combinations', () => {
    expect(recipeSelection.isTypeSuitable('Meat','Vegetarian')).to.equal("This recipe is not suitable for vegetarians")
    expect(recipeSelection.isTypeSuitable('Meat','Vegan')).to.equal("This recipe is not suitable for vegans")
    expect(recipeSelection.isTypeSuitable('Dairy','Vegan')).to.equal("This recipe is not suitable for vegans")
    expect(recipeSelection.isTypeSuitable('A','Vegan')).to.equal("This recipe is suitable for your dietary restriction")
    expect(recipeSelection.isTypeSuitable('Meat','a')).to.equal("This recipe is suitable for your dietary restriction")
  })

  it('Invalid Input', () => {
   expect(() =>{recipeSelection.isTypeSuitable(1,1)}).to.throw('Invalid input')
   expect(() =>{recipeSelection.isTypeSuitable([],"1")}).to.throw('Invalid input')
   expect(() =>{recipeSelection.isTypeSuitable("!",1)}).to.throw('Invalid input')
  })

  it('Budget', () => {
    expect(recipeSelection.isItAffordable(1,10)).to.equal(`Recipe ingredients bought. You have 9$ left`)
    expect(recipeSelection.isItAffordable(1,1)).to.equal(`Recipe ingredients bought. You have 0$ left`)
    expect(recipeSelection.isItAffordable(6,1)).to.equal(`You don't have enough budget to afford this recipe`)
   
  })
  it('Invalid Input', () => {
    expect(() =>{recipeSelection.isItAffordable("1","1")}).to.throw('Invalid input')
    expect(() =>{recipeSelection.isItAffordable([],1)}).to.throw('Invalid input')
    expect(() =>{recipeSelection.isItAffordable(1,"1")}).to.throw('Invalid input')
   })

   it('Filtered Category', () => {
    expect(recipeSelection.getRecipesByCategory([{ title: "a", category: "Asian" }],'Asian')).to.deep.equal(['a'])
    expect(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }],'German')).to.deep.equal([])
   
  })
  it('Invalid Input', () => {
    expect(() =>{recipeSelection.getRecipesByCategory(1,1)}).to.throw('Invalid input')
    expect(() =>{recipeSelection.getRecipesByCategory([],1)}).to.throw('Invalid input')
    expect(() =>{recipeSelection.getRecipesByCategory(1,"sad")}).to.throw('Invalid input')
   })
})