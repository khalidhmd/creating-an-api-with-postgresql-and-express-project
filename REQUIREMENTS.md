# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products endpoints

- Index route: 'api/products' [GET]
- Show route: 'api/products/:id' [GET]
- Create route [token required]: 'api/products' [POST]
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index route [token required]: 'api/users' [GET]
- Show route [token required]: 'api/users/:id' [GET]
- Create [token required]: 'api/users' [POST]

#### Orders

- Current Order by user (args: user id)[token required]: 'api/orders/:user_id' [GET]
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
