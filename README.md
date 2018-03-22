# BurgerBoss
A Bob's Burgers app that lets users input the names of burgers they'd like to eat. Built with MySQL, Node, Express, Handlebars and a self-made ORM.

Check out the live version here <https://floating-castle-91357.herokuapp.com/>!

Node and MySQL are used to query and route data, Handlebars is used to generate HTML.

Whenever a user submits a burger's name, the app displays the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area (left side of page) has a `Devour it!` button. When the user clicks it, the burger is moved to the right side of the page (burgers eaten).

The app stores every burger in a MySQL database.

To replicate, check package.json for dependencies and db directory for schema/seeds.
