import { User } from './user'
import { left } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { InvalidNameError } from './errors/invalid-name-error'

describe('User domain class', () => {
  test('should not create user with invalid e-mail address', () => {
    const invalidEmail = 'invalid_email'
    const error = User.create({ name: 'any_name', email: invalidEmail })
    expect(error).toEqual(left(new InvalidEmailError()))
  })

  test('should not create user with invalid name( too few characters) ', () => {
    const invalidEmail = 'O             '
    const error = User.create({ name: invalidEmail, email: 'any@mail.com' })
    expect(error).toEqual(left(new InvalidNameError()))
  })

  test('should not create user with invalid name( too many characters) ', () => {
    const invalidEmail = 'O'.repeat(257)
    const error = User.create({ name: invalidEmail, email: 'any@mail.com' })
    expect(error).toEqual(left(new InvalidNameError()))
  })

  test('should create user with valid data', () => {
    const validName = 'any_name'
    const validEmail = 'any@mail.com'
    const user: User = User.create({ name: validName, email: validEmail }).value as User
    expect(user.name.value).toEqual(validName)
    expect(user.email.value).toEqual(validEmail)
  })
})
