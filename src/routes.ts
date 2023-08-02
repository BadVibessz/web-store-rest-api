import { UserController } from "./controllers/UserController"
import { AuthController } from "./controllers/AuthController"
import { ProductController } from "./controllers/ProductController"
import { CartController } from "./controllers/CartController"
import { OrderController } from "./controllers/OrderController"

export const Routes = [
    
// users
{

    /**
     * @openapi
     * /users:
     *  get:
     *    summary: Returns a list of users
     *    tags:
     *      - User
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      200:
     *        description: A JSON array of users
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/user'
     */

    method: "get",
    route: "/users",
    controller: UserController,
    action: "getAll"
}, {

     /**
     * @openapi
     * /users/{id}:
     *  get:
     *    summary: Returns a single user with given id
     *    tags:
     *      - User
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: The id of the user
     *        required: true
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such user exception
     *      200:
     *        description: A JSON object of user
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/user'
     */

    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "get"
}, {

    /**
     * @openapi
     * /users:
     *  post:
     *    summary: Create new user
     *    tags:
     *      - User
     * 
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/createUser'
     *            
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      400:
     *        description: Some errors occured
     *      200:
     *        description: User sucessfully created
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/user'
     */

    method: "post",
    route: "/users",
    controller: UserController,
    action: "create"
}, {

     /**
     * @openapi
     * /users/{id}:
     *  put:
     *    summary: Update user with given id
     *    tags:
     *      - User
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the user
     *        required: true
     * 
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/updateUser'
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such user exception
     *      200:
     *        description: User succesfully updated
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/user'
     */

    method: "put", 
    route: "/users/:id",
    controller: UserController,
    action: "update"
}, {

     /**
     * @openapi
     * /users/{id}:
     *  delete:
     *    summary: Delete user with given id
     *    tags:
     *      - User
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the user
     *        required: true
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such user exception
     *      200:
     *        description: User sucessfully deleted
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/createUser'
     */

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