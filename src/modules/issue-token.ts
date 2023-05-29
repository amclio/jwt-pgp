import { HTTPError } from 'ky'
import { openPgpClient } from '../libs/ky.js'
import { issueTokenWithValidated } from './issue-token-with-validated.js'
import { validateSignedBody } from './validate-signed-body.js'

interface Params {
  signedBody: string
  secret: string
  email: string
  options?: object
  alg?: string
  expireAt?: string
}

export async function issueToken({
  signedBody,
  secret,
  email,
  options,
  alg = 'HS256',
  expireAt = '1h',
}: Params) {
  let publicKey: string

  try {
    publicKey = await openPgpClient.get(`vks/v1/by-email/${email}`).text()
  } catch (error) {
    if (error instanceof HTTPError) {
      throw new Error(
        'Check if the email is uploaded on https://keys.openpgp.org'
      )
    }

    throw error
  }

  const isValid = await validateSignedBody({
    signedBody,
    publicKey,
    options,
  })

  if (!isValid) {
    throw new Error(
      'The signed body or the public key was invalid. Please check.'
    )
  }

  return issueTokenWithValidated({ secret, alg, email, expireAt })
}
