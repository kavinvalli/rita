import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class SocialAuthController {
  public githubRedirect = ({ ally }: HttpContextContract) => ally.use('github').redirect()

  public async githubCallback({ ally, auth, response }) {
    const github = ally.use('github')
    const githubUser = await github.user()
    const user = await User.firstOrCreate(
      {
        email: githubUser.email,
      },
      {
        name: githubUser.name,
      }
    )

    await auth.use('web').login(user)
    return response.redirect('/')
  }

  public googleRedirect = ({ ally }: HttpContextContract) => ally.use('google').redirect()

  public async googleCallback({ ally, auth, response }) {
    const google = ally.use('google')
    const googleUser = await google.user()
    const user = await User.firstOrCreate(
      {
        email: googleUser.email,
      },
      {
        name: googleUser.name,
      }
    )

    await auth.use('web').login(user)
    return response.redirect('/')
  }
}
