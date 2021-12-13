# RITA
*React Inertia Typescript Adonis*

A batteries-included starter for Adonis apps.

## Setup
> You will have to have mysql running on your machine
```sh
git clone https://github.com/kavinvalli/rita new-project
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

## Authentication

RITA supports authentication with email-password.

### Frontend Authorization

`resources/js/lib/authorization.tsx` contains the following components - `Authenticated` and `Guest`. These show/don't show the children passed to them based on the user and authentication state.

```tsx
<Authenticated>
  Both users and admins can see this
</Authenticated>

<Guest>
  Logged in users can not see this
</Guest>
```

## Linting and Formatting

This project comes with ESLint and Prettier setup out of the box, configs are in `.eslintrc.js` and `.prettierrc` respectively.
