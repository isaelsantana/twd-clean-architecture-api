import { Either, left, right } from '../shared/either'
import { InvalidNameError } from './errors/invalid-name-error'

export class Name {
    public readonly value: string

    private constructor (name: string) {
      this.value = name
    }

    static create (name: string): Either<InvalidNameError, Name> {
      if (!this.validate(name)) {
        return left(new InvalidNameError())
      }

      return right(new Name(name))
    }

    static validate (name: string) {
      if (!name || name.trim().length < 2 || name.trim().length > 255) { return false }

      return true
    }
}
