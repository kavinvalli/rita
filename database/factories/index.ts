import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}).build()
