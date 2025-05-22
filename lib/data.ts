interface PizzaOrder {
    orderId: string;
    customerName: string;
    pizzaType: string;
    quantity: number;
    orderDate: string;
    status: string;
}

export const PizzaOrders: PizzaOrder[] = [
    {
        orderId: "PZA001",
        customerName: "John Doe",
        pizzaType: "Margherita",
        quantity: 2,
        orderDate: "2023-05-15 14:30",
        status: "Delivered",
    },
    {
        orderId: "PZA002",
        customerName: "Jane Smith",
        pizzaType: "Pepperoni",
        quantity: 1,
        orderDate: "2023-05-15 15:45",
        status: "Out for Delivery",
    },
    {
        orderId: "PZA003",
        customerName: "Robert Johnson",
        pizzaType: "Veggie Supreme",
        quantity: 3,
        orderDate: "2023-05-15 16:20",
        status: "Preparing",
    },
    {
        orderId: "PZA004",
        customerName: "Emily Davis",
        pizzaType: "Hawaiian",
        quantity: 1,
        orderDate: "2023-05-15 17:10",
        status: "Pending",
    },
    {
        orderId: "PZA005",
        customerName: "Michael Brown",
        pizzaType: "BBQ Chicken",
        quantity: 2,
        orderDate: "2023-05-15 18:05",
        status: "Cancelled",
    },
    {
        orderId: "PZA006",
        customerName: "Sarah Wilson",
        pizzaType: "Meat Lovers",
        quantity: 1,
        orderDate: "2023-05-16 10:30",
        status: "Delivered",
    },
    {
        orderId: "PZA007",
        customerName: "David Miller",
        pizzaType: "Buffalo Chicken",
        quantity: 2,
        orderDate: "2023-05-16 11:45",
        status: "Preparing",
    },
    {
        orderId: "PZA008",
        customerName: "Jennifer Taylor",
        pizzaType: "Cheese",
        quantity: 1,
        orderDate: "2023-05-16 12:20",
        status: "Pending",
    },
    {
        orderId: "PZA009",
        customerName: "Christopher Anderson",
        pizzaType: "Supreme",
        quantity: 3,
        orderDate: "2023-05-16 13:10",
        status: "Out for Delivery",
    },
    {
        orderId: "PZA010",
        customerName: "Lisa Thomas",
        pizzaType: "Mushroom",
        quantity: 1,
        orderDate: "2023-05-16 14:05",
        status: "Delivered",
    },
    {
        orderId: "PZA011",
        customerName: "Daniel Jackson",
        pizzaType: "Spinach & Feta",
        quantity: 2,
        orderDate: "2023-05-16 15:30",
        status: "Pending",
    },
    {
        orderId: "PZA012",
        customerName: "Amanda White",
        pizzaType: "Pesto Chicken",
        quantity: 1,
        orderDate: "2023-05-16 16:45",
        status: "Preparing",
    },
]

