import { Link, useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../../components/Layout'
import { SignInWithGithub, SignInWithGoogle } from '../../components/SocialButton'
import TextInput from '../../components/TextInput'
import { IPageProps } from '../../lib/types'
import useTitle from '../../lib/use-title'

const Register: React.FC = () => {
  const {
    props: { errors },
  } = usePage<IPageProps>()
  const { setData, post, processing } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setData(e.target.name as never, e.target.value as never)
  useTitle('Register')

  return (
    <Layout>
      <div className="flex items-center justify-center h-full w-full px-5">
        <div className="bg-white w-full max-w-sm p-5 rounded-lg">
          <div className="w-full flex items-center justify-start">
            <h1 className="text-xl font-bold">Register</h1>
          </div>
          <form
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault()
              post('/auth/register', {
                preserveState: true,
              })
            }}
          >
            <TextInput
              name="name"
              label="Name"
              placeholder="John Doe"
              type="text"
              className="my-4"
              disabled={processing}
              error={errors?.name}
              onChange={handleChange}
            />
            <TextInput
              name="email"
              label="Email"
              placeholder="john@example.com"
              type="text"
              className="my-4"
              disabled={processing}
              error={errors?.email}
              onChange={handleChange}
            />
            <TextInput
              name="password"
              label="Password"
              placeholder="sup3rs3cr3tp4ssw0rd"
              type="password"
              className="my-4"
              disabled={processing}
              error={errors?.password}
              onChange={handleChange}
            />
            <TextInput
              name="password_confirmation"
              label="Confirm Password"
              placeholder="sup3rs3cr3tp4ssw0rd"
              type="password"
              className="my-4"
              disabled={processing}
              error={errors?.password_confirmation}
              onChange={handleChange}
            />

            {
              // error && (
              // <div className="input-group my-4">
              //   <div className="error">{error}</div>
              // </div>
              // )
            }

            <div className="input-group my-4">
              <div className="text-center text-sm text-gray-800">
                Already have an account?{' '}
                <Link className="font-semibold" href="/auth/login">
                  Login
                </Link>
              </div>
            </div>

            <div className="input-group my-4">
              <button type="submit" className="button w-full" disabled={processing}>
                Register
              </button>
            </div>

            <div className="input-group my-4 text-md text-center font-bold text-gray-500">OR</div>

            <div className="input-group my-4">
              <SignInWithGithub />
            </div>

            <div className="input-group my-4">
              <SignInWithGoogle />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Register
