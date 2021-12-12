import { ErrorBag, Errors, Page, PageProps } from '@inertiajs/inertia'

export interface IUser {
  id: number
  email: string
  created_at: string
  updated_at: string
}

export interface IPageProps extends Page<PageProps> {
  props: {
    errors: Errors & ErrorBag
    authenticated: boolean
    user: IUser | null
  }
}
