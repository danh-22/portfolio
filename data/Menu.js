import {useState} from 'react'
const main = [
    {name: "Beef Burger", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£8.99"}, 
    {name: "Cheese Burger", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£9.50"}, 
    {name: "Bacon & Cheese Burger", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£9.99"}, 
    {name: "Mixed Grill", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£10.99"}, 
    {name: "Hot Dog", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£8.99"}
]

const sides = [
    {name: "Nachos", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£3.99"}, 
    {name: "BBQ Chicken", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£4.50"}, 
    {name: "Cheesy Fries", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£3.99"}, 
    {name: "Garlic Bread", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£3.50"}, 
    {name: "Onion Rings", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£4.50"}
]

const deserts = [
    {name: "Ice Cream Sundae", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£3.99"}, 
    {name: "Chocolate Fudge Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£4.50"}, 
    {name: "Cheesecake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£3.99"}, 
    {name: "Apple Pie", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dolor nulla. Suspendisse et sapien gravida, consectetur leo id.", price: "£3.50"}, 
]

const drinks = [
    {name: "Beer", description: "", price: "£4.50"}, 
    {name: "Coca Cola", description: "", price: "£2.99"}, 
    {name: "Fanta", description: "", price: "£2.99"}, 
    {name: "Lemonade", description: "", price: "£2.99"},
    {name: "Milkshake", description: "", price: "£3.99"}, 
    {name: "Coffee", description: "", price: "£2.50"},
    {name: "Tea", description: "", price: "£2.50"},
    {name: "Hot Chocolate", description: "", price: "£2.99"}


]

const Menu = () => {
    const [data, setData] = useState(main)
    return(
        <section id="menu-section">
        <h1 className="text-center restaurant-heading">Menu</h1>
        <div className="nav-menu">
        <h1 onClick={()=> setData(main)}>Main</h1>
        <h1 onClick={()=> setData(sides)}>Sides</h1>
        <h1 onClick={()=> setData(deserts)}>Desert</h1>
        <h1 onClick={()=> setData(drinks)}>Drinks</h1>
        </div>
        
        <div className="menu">
        {data.map((item, index)=> {
            return(
                <div key={index}>
                <h2>{item.name} - {item.price}</h2>
                <p>{item.description}</p>
                </div>
            )
        })}
        </div>

        
    </section>
    )
}

export default Menu