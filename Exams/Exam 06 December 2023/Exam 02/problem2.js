class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse
        this.location = location
        this.productStock = []
    }

    addProduct (productName, size, quantity, price){
        if(this.productStock.find(product => product.productName === productName && product.size === size)){
            const product  = this.productStock.find(product => product.productName === productName && product.size === size)
            product.quantity += quantity
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        }else{
            this.productStock.push({productName, size, quantity, price})
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }

    sendProduct (productName, size){
        if(!(this.productStock.find(product => product.productName === productName && product.size === size))){
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
        }else{
            const index = this.productStock.findIndex(product => product.productName === productName && product.size === size)
            this.productStock.splice(index,1)
            return `The product ${productName}, size ${size} was successfully removed from the inventory`
        }
    } 

    findProductsBySize(size){
        const stringArr = []
        if(!(this.productStock.find(product => product.size === size))){
            return `There are no products available in that size`
        }else{
            for (const product of this.productStock) {
                if(product.size === size){
                    stringArr.push(`${product.productName}-${product.quantity} pieces`)
                }
            }
        }
        return `${stringArr.join(', ')}`
    }

    listProducts () {
        const stringArr = []
        if(this.productStock.length === 0){
            return `${this.storehouse} storehouse is empty`
        }

        this.productStock.sort((a,b) => a.productName.localeCompare(b.productName))

        for (const product of this.productStock) {
            stringArr.push(`${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`)
        }

        return `${this.storehouse} storehouse in ${this.location} available products:\n${stringArr.join('\n')}`
    }
}
const storeHouse = new FashionRetailInventory("East", "Milano");
  console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
  console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.listProducts());
