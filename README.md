
# E-Commerce Back End Database

This backend application utilizes Object Relational Mapping (ORM) programming to manipulate database tables on an API platform for products, categories, and tags via GET, PUT, POST, and DELETE queries. 



## Features

- Allow a user to manipulate database tables using Insomnia, Postman, or Thunder Client. 


## Technology and Methodology

The application connects to a MySQL database that executes an sql query when the user interacts with data tables in various platforms; such as; Postman, Insomnia, or Thunder Client.

## Usage

The user can post, update, delete, or get data from a backend e-commerce database.

- Category Routes:
    - GET
        - all categories
        - single category
    - POST
        - single category
    - PUT
        - single category
    - DELETE
        - single category

- Product Routes:
    - GET
        - all products
        - single product
    - POST
        - single product
    - PUT
        - single product
    - DELETE
        - single product

- Tags Routes:
    - GET
        - all tags
        - single tag
    - POST
        - single tag
    - PUT
        - single tag
    - DELETE
        - single tag

## Installation

Install package.json dependencies.
- Run "npm i"

Connect connection.js script to your local SQL database editor.
- Modify database password line in .env file with that of your local SQL database editor.

Create database tables:

- Run schema.sql in your local SQL database editor.

- Seed SQL database editor
    - Run "node seeds/index.js"

Execute the program:
- Run "npm start"

## Application Demo Snippet
![ecom](https://user-images.githubusercontent.com/114820394/215233350-fa892b30-bf20-4c1d-a810-4746ef64eb5b.gif)





## 🔗 Full Demo Links: Routes & SQL
[![Click for Tutorial](https://img.shields.io/badge/Full%20Video%20Demo-Click-yellow)](https://screencast-o-matic.com/watch/c0VtqPVxIab)

[![Click for Tutorial](https://img.shields.io/badge/Full%20Video%20Demo-Click-yellow)](https://screencast-o-matic.com/watch/c0Vt0pVx2hE)

[![Click for Tutorial](https://img.shields.io/badge/Full%20Video%20Demo-Click-yellow)](https://screencast-o-matic.com/watch/c0VwILVx3JG)

## Tech Stack


- JavaScript
- MySQL
- Node.js 
    - NPM (Express)
    - NPM (DotEnv)
    - NPM (Sequelize)
- ES6+ Syntax




**Server:** Visual Studio Code


## Authors

- [@liquidmonks](https://www.github.com/liquidmonks)


![Logo](https://i.imgur.com/MrXyBQy.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)

