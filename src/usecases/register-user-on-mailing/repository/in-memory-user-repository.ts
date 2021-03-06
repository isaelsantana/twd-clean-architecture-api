import { UserRepository } from '../ports/user-repository'
import { UserData } from '../../../entities/user-data'

export class InMemoryUserRepository implements UserRepository {
    private repository: UserData[]

    constructor (repository: UserData[]) {
      this.repository = repository
    }

    async add (user: UserData): Promise<void> {
      const exists = await this.exists(user)
      if (!exists) { this.repository.push(user) }
    }

    async findUserByEmail (email: string): Promise<UserData> {
      const user = this.repository.find(item => item.email === email) ?? null
      return user
    }

    async findAllUsers (): Promise<UserData[]> { return await this.repository }

    async exists (user: UserData): Promise<boolean> {
      return !((await this.findUserByEmail(user.email))) === null
    }
}
