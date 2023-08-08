import 'dotenv/config'

export class Env {
  static get (key: string, fallback?: string): string {
    const value = process.env[key] || fallback

    if (value === undefined) {
      throw new Error(`Please provide env variable for ${key}`)
    }

    return value
  }
}
