import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class CreateUser extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'create:user'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Create a new user'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process
     */
    stayAlive: false,
  }

  public async run() {
    const name = await this.prompt.ask('Enter name', {
      validate(name) {
        if (!name) {
          return 'Name is required'
        }

        return true
      },
    })
    const email = await this.prompt.ask('Enter email', {
      validate(email) {
        if (!email) {
          return 'Email is required'
        }
        if (
          !email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          return 'Email is not valid'
        }

        return true
      },
    })
    const password = await this.prompt.secure('Enter password', {
      validate(password) {
        if (!password) {
          return 'Password is required'
        }
        if (password.length < 8) {
          return 'Password must be atleast 8 characters long'
        }

        return true
      },
    })
    const admin = await this.prompt.confirm('Is Admin?')

    const { default: User } = await import('App/Models/User')
    await User.create({
      name,
      email,
      password,
      admin,
    })
  }
}
