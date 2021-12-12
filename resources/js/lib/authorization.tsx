import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { IPageProps } from './types'

interface IAuthorizationProps {
  children: React.ReactNode
}

export const Authenticated: React.FC<IAuthorizationProps> = ({ children }: IAuthorizationProps) => {
  const {
    props: { authenticated },
  } = usePage<IPageProps>()
  return authenticated ? <>{children}</> : <></>
}

export const Guest: React.FC<IAuthorizationProps> = ({ children }: IAuthorizationProps) => {
  const {
    props: { authenticated },
  } = usePage<IPageProps>()
  return !authenticated ? <>{children}</> : <></>
}
