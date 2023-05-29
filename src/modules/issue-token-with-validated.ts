import type {} from 'jose'
import * as jose from 'jose'
import { createJwtSecret } from '../utils/create-jwt-secret.js'

interface Params {
  email: string
  secret: string
  alg: string
  expireAt: string
}

export async function issueTokenWithValidated({
  alg,
  secret,
  expireAt,
  email,
}: Params) {
  const secretBuffer = createJwtSecret(secret)

  const jwt = await new jose.SignJWT({ email })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(expireAt)
    .sign(secretBuffer)

  return jwt
}
