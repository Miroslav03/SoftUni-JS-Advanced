class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.")
        }

        if (this.items.length >= this.capacity) {
            throw new Error("The inventory is already full.")
        }

        if (this.items.find(item => item.itemName === itemName)) {
            const item = this.items.find(item => item.itemName === itemName)
            item.quantity += quantity
        } else {
            this.items.push({ itemName, quantity })
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.")
        }

        if (!(this.items.find(item => item.itemName === itemName))) {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }

        const item = this.items.find(item => item.itemName === itemName)

        if (quantity > item.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }

        item.quantity -= quantity
        if (item.quantity === 0) {
            const objIndex = this.items.findIndex(item => item.itemName === itemName)
            const obj = this.items.splice(objIndex, 1)
            this.outOfStock.push(obj[0])
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity){
        if(quantity<=0){
            throw new Error("Quantity must be greater than zero.")
        }
        if (this.items.find(item => item.itemName === itemName)) {
            const item = this.items.find(item => item.itemName === itemName)
            item.quantity += quantity
        }else{
            this.items.push({itemName,quantity})
        }

        if(this.outOfStock.find(item => item.itemName === itemName)){
            const index = this.outOfStock.findIndex(item => item.itemName === itemName);
            this.outOfStock.splice(index,1)
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }

    getInventorySummary(){
        const itemString = [];
        const outOfArr =[];

        itemString.push("Current Inventory:")
        for (const objItem of this.items) {
            itemString.push(`${objItem.itemName}: ${objItem.quantity}`)
        }
        
        if(this.outOfStock.length>0){
            for (const el of this.outOfStock) {
                outOfArr.push(el.itemName)
            }
            return itemString.join('\n') + `\nOut of Stock: ${outOfArr.join(', ')}`
        }else{
            return itemString.join('\n')
        }
    }
}


const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Hammer", 5));
