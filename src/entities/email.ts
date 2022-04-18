export class Email {
  static validate (email: string): boolean {
    if (!email) { return false }

    const [local, domain] = email.split('@')
    if (local.length > 64 || local.length === 0 || email.length > 320 || domain.length > 255 || domain.length === 0) { return false }
    return true
  }
}
