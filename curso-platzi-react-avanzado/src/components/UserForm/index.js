import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Error, Title } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' type='email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
