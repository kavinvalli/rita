import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { UserFactory } from 'Database/factories'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await UserFactory.createMany(100)
    await User.create({
      name: 'Admin',
      email: 'admin@example.com',
      password: 'adminadmin',
      admin: true,
    })
  }
}
