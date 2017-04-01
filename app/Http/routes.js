'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use("Route")

Route.get("/", "TeamsController.index")
// Route.on("/").render("home")
Route.on("/teammatchup").render("teammatchup")
Route.on("/statistics").render("statistics")

// Route.on('/').render('home')
// Route.on('/about').render('about')
// Route.on('/contact').render('contact')
