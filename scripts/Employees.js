import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let employeeHtml = "<ul>"

    for (const employee of employees) {
        employeeHtml += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    employeeHtml += "</ul>"

    return employeeHtml
}

const employeeOrders = (employee) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            // Increment the number of fulfilled orders
            fulfilledOrders++
        }
    }
    return fulfilledOrders// Return how many orders were fulfilled
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // refers to the Id in each list item
        if (itemClicked.id.startsWith("employee")) {
            // productId is var name
            const [,employeeId] = itemClicked.id.split("--")
            
            for (const employee of employees) {
                // [,employeeId] exists as string, parseInt turns into Int, compares to int of product.id
                if (employee.id === parseInt(employeeId)) {

                   const orderCount = employeeOrders(employees)
                
                    window.alert(`${employee.name} sold ${orderCount} products.`)
                }
            }
        }
    }
)

