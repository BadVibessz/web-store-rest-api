import { UserController } from "./controllers/UserController"
import { AuthController } from "./controllers/AuthController"
import { ProductController } from "./controllers/ProductController"

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
    route: "/products",
    controller: ProductController,
    action: "delete"
}

]