import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null string', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty string', () => {
    const email: string = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept valid email', () => {
    const email = 'any@mail.com'
    expect(Email.validate(email)).toBeTruthy()
  })

  test('should not accept strings larger than 320 chars', () => {
    const email = `${'l'.repeat(64)}@${'d'.repeat(100)}.${'c'.repeat(200)}`
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept domain part than 255 chars', () => {
    const email = `any@${'d'.repeat(100)}.${'c'.repeat(200)}`
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept local part larger than 64 chars', () => {
    const email = `${'l'.repeat(65)}@mail.com`
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty local part', () => {
    const email = '@mail.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty domain', () => {
    const email = 'any@'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept domain with a part larger than 63 chars', () => {
    const email = `any@${'d'.repeat(64)}.com`
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept local part with invalid char', () => {
    const email = 'any email@mail.com'
    expect(Email.validate(email)).toBeFalsy()
  })
})
