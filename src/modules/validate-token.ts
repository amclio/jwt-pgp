import { jwtVerify } from 'jose'
import { createJwtSecret } from '../utils/create-jwt-secret.js'

interface Param {
  token: string
  secret: string
  options?: object
}

export async function validateToken({ token, secret }: Param) {
  const secretBuffer = createJwtSecret(secret)
  return await jwtVerify(token, secretBuffer)
}
