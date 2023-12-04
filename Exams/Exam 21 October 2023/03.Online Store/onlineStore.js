const { expect } = require("chai");

const onlineStore = {
  isProductAvailable(product, stockQuantity) {
    if (typeof product !== "string" || typeof stockQuantity !== "number") {
      throw new Error("Invalid input.");
    }

    if (stockQuantity <= 0) {
      return `Sorry, ${product} is currently out of stock.`;
    } else {
      return `Great! ${product} is available for purchase.`;
    }
  },
  canAffordProduct(productPrice, accountBalance) {
    if (typeof productPrice !== "number" || typeof accountBalance !== "number") {
      throw new Error("Invalid input.");
    }

    let remainingBalance = accountBalance - productPrice;

    if (remainingBalance < 0) {
      return "You don't have sufficient funds to buy this product.";
    } else {
      return `Product purchased. Your remaining balance is $${remainingBalance}.`;
    }
  },
  getRecommendedProducts(productList, category) {
    let recommendedProducts = [];

    if (!Array.isArray(productList) || typeof category !== "string") {
      throw new Error("Invalid input.");
    }

    productList.forEach((product) => {
      if (product.category === category) {
        recommendedProducts.push(product.name);
      }
    });

    if (recommendedProducts.length === 0) {
      return `Sorry, we currently have no recommended products in the ${category} category.`;
    } else {
      return `Recommended products in the ${category} category: ${recommendedProducts.join(", ")}`;
    }
  },
};


describe('Main tests', () => {
  it('Stock', () => {
    expect(onlineStore.isProductAvailable('Apple', 0)).to.equal(`Sorry, Apple is currently out of stock.`)
    expect(onlineStore.isProductAvailable('Apple', -1)).to.equal(`Sorry, Apple is currently out of stock.`)
    expect(onlineStore.isProductAvailable('Apple', 1)).to.equal(`Great! Apple is available for purchase.`)
  })
  it('Invalid and Valid Arguments', () => {
    //Invalid
    expect(() => { onlineStore.isProductAvailable(1, 1) }).to.throw(`Invalid input.`)
    expect(() => { onlineStore.isProductAvailable("1", "1") }).to.throw(`Invalid input.`)
    expect(() => { onlineStore.isProductAvailable([], "1") }).to.throw(`Invalid input.`)
    //Valid
    expect(onlineStore.isProductAvailable("Apple", 1)).to.equal(`Great! Apple is available for purchase.`)

  })
  it('Balance', () => {
    expect(onlineStore.canAffordProduct(1, 5)).to.equal(`Product purchased. Your remaining balance is $4.`)
    expect(onlineStore.canAffordProduct(1, 1)).to.equal(`Product purchased. Your remaining balance is $0.`)
    expect(onlineStore.canAffordProduct(1, 0)).to.equal("You don't have sufficient funds to buy this product.")
  })

  it('Ivalid Input', () => {
    expect(() => { onlineStore.canAffordProduct([], "1") }).to.throw(`Invalid input.`)
    expect(() => { onlineStore.canAffordProduct("1", "1") }).to.throw(`Invalid input.`)

  })

  it('Find Products', () => {
    expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" },{ name: "Mic", category: "Photography" }], 'Photography')).to.equal(`Recommended products in the Photography category: Camera, Mic`)
    expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" },{ name: "Mic", category: "Photography" }], 'Coding')).to.equal(`Sorry, we currently have no recommended products in the Coding category.`)
    expect(onlineStore.getRecommendedProducts([], 'Coding')).to.equal(`Sorry, we currently have no recommended products in the Coding category.`)
  })
  it('Ivalid Input', () => {
    expect(() => { onlineStore.getRecommendedProducts(1, "1") }).to.throw(`Invalid input.`)
    expect(() => { onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" },{ name: "Mic", category: "Photography" }], 1) }).to.throw(`Invalid input.`)
  })
})
