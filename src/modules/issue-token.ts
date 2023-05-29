import { validateSignedBody } from './validate-signed-body'

export async function issueToken({ signedBody, publicKey, email, options }) {
  const isValid = await validateSignedBody({
    signedBody,
    publicKey,
    email,
    options,
  })

  if (!isValid) {
    throw new Error(
      'The signed body or the public key was invalid. Please check.'
    )
  }
}
