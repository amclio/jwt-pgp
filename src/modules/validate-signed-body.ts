import * as pgp from 'openpgp'

interface Params {
  signedBody: string
  publicKey: string
  options?: object
}

export async function validateSignedBody({
  signedBody,
  publicKey,
  options,
}: Params) {
  const key = await pgp.readKey({ armoredKey: publicKey })
  const message = await pgp.readCleartextMessage({
    cleartextMessage: signedBody,
  })

  try {
    const decrypted = await pgp.verify({ message, verificationKeys: key })
    return decrypted
  } catch (error) {
    console.error(error)
    return false
  }
}
