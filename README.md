# RITA
*React Inertia Typescript Adonis* with TailwindCSS

A batteries-included starter for Adonis apps.

## Setup
> You will have to have mysql running on your machine
```sh
git clone https://github.com/kavinvalli/rita new-project
cd new-project
rm -rf CNAME
npm i
cp .env.example .env
node ace migration:run
node ace db:seed
npm run dev
```

## Frontend

### Types

Types for the app are defined in `resources/js/lib/types.tsx`, this file has the interface `IPageProps`, which is used with the `usePage` hook from Inertia for typing shared data coming from the backend.

```tsx
const { props: { user } } = usePage<IPageProps>();
```

This file also has `IUser`, the interface for the User model.

### `useTitle`

`resources/js/lib/use-title.tsx` contains the `useTitle` hook, used to set the title from inside a React component. You could also use [Inertia's `Head` component](https://inertiajs.com/title-and-meta) for this.


### Ace command to create pages

`node ace make:page <PAGE NAME>` creates a page in `resources/js/pages` using the template in `commands/templates/page.txt`.
For example: `node ace make:page auth/login` or `node ace make:page test`

## Authentication

RITA supports authentication with email-password, Github and Google out of the box. Social authentication is implemented with [Ally](https://docs.adonisjs.com/guides/auth/social#document), so it should be easy to add other providers. See `app/Http/Controllers/SocialAuthController.ts` for implementation.

## Ace command to create user
`node ace create:user` prompts you fields to create a new user directly from the cli.

## Inertia Shared Data
You can share data across all inertia pages by editting `start/inertia.ts` and updating `IPageProps` in `resources/js/lib/types.tsx`

## Authorization

Admin accounts have the `admin` property on the `User` model set to true. By default, all users who register via the `/auth/register` route are not admins.

### Middleware
You can use the `auth` and the `admin` middleware which are set in `app/Middleware`

### Seeded admin account

The database seeder creates an admin account with the following credentials:

```
Email: admin@example.com
Password: adminadmin
```

### Frontend Authorization

`resources/js/lib/authorization.tsx` contains the following components - `Admin`, `User`, `Authenticated` and `Guest`. These show/don't show the children passed to them based on the user and authentication state.

```tsx
<Admin>
  Only an admin can see this
</Admin>

<User>
  Only a user who is not an admin can see this
</User>

<Authenticated>
  Both users and admins can see this
</Authenticated>

<Guest>
  Logged in users can not see this
</Guest>
```

## Socket.io implemented
### Backend
#### Broadcast on start
You can setup listeners or emit data on start by editting `start/socket.ts`.

#### Broaadcast from anywhere
https://docs.adonisjs.com/cookbooks/socketio-with-adonisjs#broadcast-from-anywhere

### Frontend
1. Use the `useContext` api and `SockerContext` in `resources/js/context/socket.tsx`
```tsx
import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../context/socket'

const socket = useContext(SocketContext)
```
2. On `useEffect`, you can setup listeners or emit some data
```tsx
useEffect(() => {
  socket.on('test', (data: { [key: string]: string }) => console.log(data))
  socket.on('sendMessageToClient', (data: string) => console.log(data))

  return () => socket.disconnect()
}, [])
```

3. You can also emit data from the frontend on certain events. For example:
```tsx
<button className="button" onClick={() => socket.emit('sendMessage', 'hello world!')}>
  Hello
</button>
```

## Linting and Formatting

This project comes with ESLint and Prettier setup out of the box, configs are in `.eslintrc.js` and `.prettierrc` respectively.

## Example
A Todo app made with RITA can be found at https://github.com/kavinvalli/rita-todo
