export class Email {
  static validate (email: string): boolean {
    const emailRegex = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (!email) { return false }

    if (!emailRegex.test(email)) return false

    const [local, domain] = email.split('@')
    const isdomainPartsInvalidLength = domain.split('.').some(item => item.length > 63)
    if (local.length > 64 || local.length === 0 || email.length > 320 || domain.length > 255 || domain.length === 0 || isdomainPartsInvalidLength) { return false }
    return true
  }
}
