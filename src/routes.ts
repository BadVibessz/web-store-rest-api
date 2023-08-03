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

     /**
     * @openapi
     * /products:
     *  get:
     *    summary: Get all products
     *    tags:
     *      - Product
     *
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      200:
     *        description: List of available products
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/product'
     */

    method: "get",
    route: "/products",
    controller: ProductController,
    action: "getAll"
},{

    /**
     * @openapi
     * /products/{id}:
     *  get:
     *    summary: Get product with given id
     *    tags:
     *      - Product
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the product
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
     *        description: Product with given id
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/product'
     */

    method: "get",
    route: "/products/:id",
    controller: ProductController,
    action: "get"
},{


    /**
     * @openapi
     * /products:
     *  post:
     *    summary: Create new product
     *    tags:
     *      - Product
     * 
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/createProduct'
     *            
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      400:
     *        description: Some errors occured
     *      200:
     *        description: Product sucessfully created
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/product'
     */

    method: "post",
    route: "/products",
    controller: ProductController,
    action: "create"
},{


    /**
     * @openapi
     * /products/{id}:
     *  put:
     *    summary: Update product with given id
     *    tags:
     *      - Product
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the product
     *        required: true
     * 
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/updateProduct'
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such product exception
     *      200:
     *        description: Product succesfully updated
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/product'
     */

    method: "put",
    route: "/products/:id",
    controller: ProductController,
    action: "update"
},{


     /**
     * @openapi
     * /products/{id}:
     *  delete:
     *    summary: Delete product with given id
     *    tags:
     *      - Product
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the product
     *        required: true
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such product exception
     *      200:
     *        description: Product sucessfully deleted
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/product'
     */

    method: "delete",
    route: "/products/:id",
    controller: ProductController,
    action: "delete"
},

// carts
{

     /**
     * @openapi
     * /carts:
     *  get:
     *    summary: Get all carts
     *    tags:
     *      - Cart
     *
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      200:
     *        description: List of pending carts
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/cart'
     */

    method: "get",
    route: "/carts",
    controller: CartController,
    action: "getAll"
},{


    /**
     * @openapi
     * /carts/{id}:
     *  get:
     *    summary: Get cart with given id
     *    tags:
     *      - Cart
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the cart
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
     *        description: Cart with given id
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/cart'
     */

    method: "get",
    route: "/carts/:id",
    controller: CartController,
    action: "get"
},{


     /**
     * @openapi
     * /carts:
     *  post:
     *    summary: Create new cart
     *    tags:
     *      - Cart
     * 
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/createCart'
     *            
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      400:
     *        description: Some errors occured
     *      200:
     *        description: Cart sucessfully created
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/cart'
     */

    method: "post",
    route: "/carts/",
    controller: CartController,
    action: "create"
},{

    /**
     * @openapi
     * /carts/{id}:
     *  delete:
     *    summary: Delete cart with given id
     *    tags:
     *      - Cart
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the cart
     *        required: true
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such cart exception
     *      200:
     *        description: Cart sucessfully deleted
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/cart'
     */

    method: "delete",
    route: "/carts/:id",
    controller: CartController,
    action: "delete"
},

// cart items
{

      /**
     * @openapi
     * /carts/{cartId}/items:
     *  post:
     *    summary: Add new item to the cart with given id
     *    tags:
     *      - Cart
     * 
     *    parameters:
     *      - name: cartId
     *        in: path
     *        description: id of the cart
     *        required: true
     * 
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/createCartItem'
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      400:
     *        description: Some errors occured
     *      200:
     *        description: Item sucessfully added to the cart
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/cart'
     */

    method: "post",
    route: "/carts/:cartId/items/",
    controller: CartController,
    action: "addItem"
},{

 /**
     * @openapi
     * /carts/{cartId}/items:
     *  delete:
     *    summary: Delete item from the cart with given id
     *    tags:
     *      - Cart
     * 
     *    parameters:
     *      - name: cartId
     *        in: path
     *        description: id of the cart
     *        required: true
     * 
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/deleteCartItem'
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such cart/item exception
     *      200:
     *        description: Item sucessfully deleted from the cart
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/cart'
     */

    method: "delete",
    route: "/carts/:cartId/items/",
    controller: CartController,
    action: "deleteItem"
},

// orders
{

     /**
     * @openapi
     * /orders:
     *  get:
     *    summary: Get all orders
     *    tags:
     *      - Order
     *
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      200:
     *        description: List of active orders
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/order'
     */

    method: "get",
    route: "/orders/",
    controller: OrderController,
    action: "getAll"
},{

    /**
     * @openapi
     * /orders/{id}:
     *  get:
     *    summary: Get order with given id
     *    tags:
     *      - Order
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the order
     *        required: true
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such order exception
     *      200:
     *        description: Order with given id
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/order'
     */

    method: "get",
    route: "/orders/:id",
    controller: OrderController,
    action: "get"
},{

    /**
     * @openapi
     * /orders:
     *  post:
     *    summary: Create new order from cart with given id
     *    tags:
     *      - Order
     * 
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/createOrder'
     *            
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      400:
     *        description: Some errors occured
     *      200:
     *        description: Order sucessfully created
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/order'
     */

    method: "post",
    route: "/orders/",
    controller: OrderController,
    action: "create"
},{

     /**
     * @openapi
     * /orders/{id}:
     *  put:
     *    summary: Update order with given id
     *    tags:
     *      - Order
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the order
     *        required: true
     * 
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/updateOrder'
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such order exception
     *      200:
     *        description: Order succesfully updated
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/order'
     */

    method: "put",
    route: "/orders/:id",
    controller: OrderController,
    action: "update"
},{


      /**
     * @openapi
     * /orders/{id}:
     *  delete:
     *    summary: Delete order with given id
     *    tags:
     *      - Order
     * 
     *    parameters:
     *      - name: id
     *        in: path
     *        description: id of the order
     *        required: true
     * 
     *    responses:
     *      401:
     *        description: Unauthorized exception
     *      500:
     *        description: Internal error
     *      400:
     *        description: No such order exception
     *      200:
     *        description: Order sucessfully deleted
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/order'
     */


    method: "delete",
    route: "/orders/:id",
    controller: OrderController,
    action: "delete"
},

]