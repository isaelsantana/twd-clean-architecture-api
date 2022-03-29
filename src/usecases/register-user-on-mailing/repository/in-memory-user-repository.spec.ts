import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User repository', () => {
  test('shloud return null if user is not found', async () => {
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)
    const user = await sut.findUserByEmail('any@mail.com')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@mail.com'
    const sut = new InMemoryUserRepository(users)
    await sut.add({ name, email })
    const user = await sut.findUserByEmail('any@mail.com')
    expect(user.name).toBe('any_name')
  })

  test('shoud return all users in the repository', async () => {
    const users: UserData[] = [{ name: 'any_name', email: 'any@mail.com' }, { name: 'any_name2', email: 'any2@mail.com' }]
    const sut = new InMemoryUserRepository(users)
    const usersAll = await sut.findAllUsers()
    expect(usersAll.length).toBe(2)
  })
})
