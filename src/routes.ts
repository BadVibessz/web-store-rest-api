import { UserController } from "./controllers/UserController"
import { AuthController } from "./controllers/AuthController"
import { ProductController } from "./controllers/ProductController"
import { CartController } from "./controllers/CartController"
import { OrderController } from "./controllers/OrderController"

export const Routes = [
    
// users
{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "getAll"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "get"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "create"
}, {
    method: "put", 
    route: "/users/:id",
    controller: UserController,
    action: "update"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "delete"
},

// auth
{
    method: "post",
    route: "/auth/register",
    controller: AuthController,
    action: "register"
},{
    method: "post",
    route: "/auth/login",
    controller: AuthController,
    action: "login"
},

// products
{
    method: "get",
    route: "/products",
    controller: ProductController,
    action: "getAll"
},{
    method: "get",
    route: "/products/:id",
    controller: ProductController,
    action: "get"
},{
    method: "post",
    route: "/products",
    controller: ProductController,
    action: "create"
},{
    method: "put",
    route: "/products/:id",
    controller: ProductController,
    action: "update"
},{
    method: "delete",
    route: "/products/:id",
    controller: ProductController,
    action: "delete"
},

// carts
{
    method: "get",
    route: "/carts",
    controller: CartController,
    action: "getAll"
},{
    method: "get",
    route: "/carts/:id",
    controller: CartController,
    action: "get"
},{
    method: "post",
    route: "/carts/",
    controller: CartController,
    action: "create"
},{
    method: "delete",
    route: "/carts/",
    controller: CartController,
    action: "delete"
},

// cart items
{
    method: "post",
    route: "/carts/:cartId/items/",
    controller: CartController,
    action: "addItem"
},{
    method: "delete",
    route: "/carts/:cartId/items/",
    controller: CartController,
    action: "deleteItem"
},

// orders
{
    method: "get",
    route: "/orders/",
    controller: OrderController,
    action: "getAll"
},{
    method: "get",
    route: "/orders/",
    controller: OrderController,
    action: "get"
},{
    method: "post",
    route: "/orders/",
    controller: OrderController,
    action: "create"
},{
    method: "put",
    route: "/orders/:id",
    controller: OrderController,
    action: "update"
},{
    method: "delete",
    route: "/orders/",
    controller: OrderController,
    action: "delete"
},

]