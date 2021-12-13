import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    await auth.use('web').authenticate()
    if (!auth.user?.admin) {
      response.unauthorized({ error: 'Must be an admin user' })
      return
    }
    await next()
  }
}
