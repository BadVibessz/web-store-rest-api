import { UserController } from "./controller/UserController"
import { AuthController } from "./controller/AuthController"

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
},
{
    method: "post",
    route: "/auth/login",
    controller: AuthController,
    action: "login"
}

]