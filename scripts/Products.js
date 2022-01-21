import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let productHtml = "<ul>"

    for (const product of products) {
        // each list item will have unique Id of "erich--(id value of product"
        productHtml += `<li id="erich--${product.id}">${product.name}</li>`
    }

    productHtml+= "</ul>`"

    return productHtml
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // refers to the Id in each list item
        if (itemClicked.id.startsWith("erich")) {
            // productId is var name
            const [,productId] = itemClicked.id.split("--")
            
            for (const product of products) {
                // [,productId] exists as string, parseInt turns into Int, compares to int of product.id
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs $${product.price}.`)
                }
            }
        }
    }
)
            
            

