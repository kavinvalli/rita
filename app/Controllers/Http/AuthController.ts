import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class AuthController {
  public showLogin = ({ inertia }: HttpContextContract) => inertia.render('auth/login')

  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.use('web').attempt(email, password)
    return response.redirect('/')
  }

  public showRegister = ({ inertia }: HttpContextContract) => inertia.render('auth/register')

  public async register({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.create({
      email,
      password,
    })
    await auth.login(user)
    return response.redirect('/')
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('web').logout()
    return response.redirect('/')
  }
}
