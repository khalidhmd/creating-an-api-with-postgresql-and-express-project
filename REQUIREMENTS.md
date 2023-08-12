## API Endpoints

#### Users

- Index route: 'api/users' [GET]

  - jwt token is required to ba passed in `Authorization` header with this format `Bearer <Token value>`
  - response is a list of users

- Show route: 'api/users/:id' [GET]
  - jwt token is required to ba passed in `Authorization` header with this format `Bearer <Token value>`
  - user id is required as route parameter
  - response is a user object for user with supplied id
- Create: 'api/users' [POST]
  - jwt token is required to ba passed in `Authorization` header with this format `Bearer <Token value>`
  - request body contains user data (email, password, first_name, last_name)
  - response is a jwt of created newly user

#### Products endpoints

- Index route: 'api/products' [GET]
- Show route: 'api/products/:id' [GET]
- Create route: 'api/products' [POST] [token required]
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Orders

- Current Order by user (args: user id): 'api/orders/:user_id' [GET] [token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

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
