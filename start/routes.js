'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('api/jwt/login', 'AuthController.postLoginJwt').as('loginJwt')
Route.post('api/jwt/refresh', 'AuthController.postRefreshTokenJwt').as('refreshTokenJwt').middleware(['auth:jwt'])
Route.post('api/jwt/logout', 'AuthController.postLogoutJwt').as('loginJwt').middleware(['auth:jwt'])
Route.get('api/jwt/profile', 'AuthController.getProfileJwt').as('profileJwt').middleware(['auth:jwt'])