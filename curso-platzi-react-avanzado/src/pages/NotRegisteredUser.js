import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'El usuario ya existe o hay algún problema.'

            return <UserForm title='Registrarse' onSubmit={onSubmit} disabled={loading} error={errorMsg} />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe.'

            return <UserForm title='Iniciar Sesión' onSubmit={onSubmit} disabled={loading} error={errorMsg} />
          }
        }
      </LoginMutation>
    </>
  )
}
