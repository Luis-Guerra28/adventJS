/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  
    const inventoryOrganized = {}

    inventory.forEach(toy => {
        if (!inventoryOrganized[toy.category]){
        inventoryOrganized[toy.category] = {}      
        }
        if (!inventoryOrganized[toy.category][toy.name]) {
        inventoryOrganized[toy.category][toy.name] = toy.quantity
        } else {
        inventoryOrganized[toy.category][toy.name] += toy.quantity
        }
    })

    return inventoryOrganized
}
