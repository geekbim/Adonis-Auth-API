'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const u1 = new User()
    u1.name = 'geekbim'
    u1.password = '*****'
    u1.email = 'manyuabim9@gmail.com'
    u1.role = 'member'
    await u1.save()

    const u2 = new User()
    u2.name = 'dhanu'
    u2.password = 'qweasd123'
    u2.email = 'dhanu@email.com'
    u2.role = 'admin'
    await u2.save()
  }
}

module.exports = UserSeeder
