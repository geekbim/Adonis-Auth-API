'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Env = use('Env')
const jwt = require('jsonwebtoken')
const axios = require('axios')

class SocketAuth {

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle ({}, next) {
    // call next to advance the request
    const appKey = Env.get('APP_KEY')
    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYwMzI3NDUxMn0.zPZL0ujUhpGKvvxcMyu3qRXoBxnrLhpBWcXVdYjXUac"
    console.log(appKey)
    
    // get role
    const response = await axios.get('http://127.0.0.1:3333/api/jwt/profile', {
      headers: {
        Authorization: 'Bearer ' + jwtToken //the token is a variable which holds the token
      }
    })
    console.log(response.data.role);

    if (response.data.role != "member") {
      jwt.verify(jwtToken, null)
      await next()
    } else if (response.data.role == "member") {
      jwt.verify(jwtToken, appKey)
      await next()
    }
  }
}

module.exports = SocketAuth
