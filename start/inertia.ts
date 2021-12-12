/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors')
  },
  authenticated: ({ auth }: HttpContextContract) => auth.isLoggedIn,
  user: ({ auth }: HttpContextContract) => auth.user,
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))
