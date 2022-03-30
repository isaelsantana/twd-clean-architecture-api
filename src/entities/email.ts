export class Email {
  static validate (email: string): boolean {
    if (!email) { return false }

    const [local] = email.split('@')
    if (local.length > 64 || email.length > 320) { return false }
    return true
  }
}