## API Endpoints

#### Users

- 'api/users' [GET]

  - jwt token is required to be passed in `Authorization` header with this format `Bearer <Token value>`
  - response is a list of users

- 'api/users/:id' [GET]
  - jwt token is required to be passed in `Authorization` header with this format `Bearer <Token value>`
  - user id is required as route parameter
  - response is a user object for user with supplied id
- 'api/users' [POST]
  - jwt token is required to be passed in `Authorization` header with this format `Bearer <Token value>`
  - request body contains user data (email, password, first_name, last_name)
  - response is a jwt of newly created user

#### Products endpoints

- 'api/products' [GET]

  - response is a list of products

- 'api/products/:id' [GET]

  - product id is required as route parameter
  - response is products object for product with supplied id

- Create route: 'api/products' [POST]
  - jwt token is required to be passed in `Authorization` header with this format `Bearer <Token value>`
  - request body contains user data (email, password, first_name, last_name)
  - response is an object of newly created product
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Orders

- 'api/orders/:user_id' [GET]
- jwt token is required to be passed in `Authorization` header with this format `Bearer <Token value>`
- user id is required as route parameter
- response is a list of orders of the user with supplied id
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

#### auth

- 'api/auth' [POST]
  - request body contains user signin data (email, password)
  - response is a jwt of signed in user

## Data Schema Design

### users table

- id: serial primary key
- first_name: varchar(30)
- last_name: varchar(30)
- email: varchar(80)
- password: varchar(100)

### products table

- id: serial primary key
- name: varchar(50)
- category: varchar(20)
- price: float

### orders table

- id: serial primary key
- user_id: integer FOREIGN KEY REFERENCES users (id)
- order_date: date
- status: boolean

### order_products table

- id: serial primary key
- product_id: integer FOREIGN KEY REFERENCES products (id)
- order_id: integer FOREIGN KEY REFERENCES orders (id)
- quantity: integer

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- date
- user_id
- status of order (active or complete)

#### OrderProducts

- id
- order_id
- product_id
- quantity
