import { UserController } from "./controllers/UserController"
import { AuthController } from "./controllers/AuthController"
import { ProductController } from "./controllers/ProductController"
import { CartController } from "./controllers/CartController"

export const Routes = [{
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
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "delete"
},{
    method: "post",
    route: "/auth/register",
    controller: AuthController,
    action: "register"
},{
    method: "post",
    route: "/auth/login",
    controller: AuthController,
    action: "login"
},{
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
    method: "delete",
    route: "/products/:id",
    controller: ProductController,
    action: "delete"
},{
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
    method: "post",
    route: "/carts/:cartId/items/",
    controller: CartController,
    action: "addItem"
},{
    method: "delete",
    route: "/carts/:cartId/items/:itemId",
    controller: CartController,
    action: "deleteItem"
}

]